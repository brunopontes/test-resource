using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Localization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.ResponseCompression;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System.Globalization;
using System.IO.Compression;
using TestResource.ApplicationService.Service;
using TestResource.Domain.IApplicationService;
using TestResource.Domain.IRepository;
using TestResource.Domain.Mapper;
using TestResource.Repository.Repositories;

namespace TestResource.Api
{
    public class Startup
    {
        public IConfiguration Configuration { get; }

        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", false, true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);

            services.AddResponseCompression(options =>
            {
                options.Providers.Add<GzipCompressionProvider>();
            });

            services.Configure<GzipCompressionProviderOptions>(options =>
            {
                options.Level = CompressionLevel.Fastest;
            });

            //services.AddCors();
            services.AddSwaggerGen(c =>
            {
                c.DocInclusionPredicate((docName, apiDesc) => apiDesc.HttpMethod != null);
            });
            services.ConfigureSwaggerGen(options =>
            {
                options.SwaggerDoc("v1", new Swashbuckle.AspNetCore.Swagger.Info
                {
                    Title = "Test - v1.0.0",
                    Version = "v1.0.0",
                    Description = "Test API",
                    TermsOfService = "Termos de serviço",
                });
                options.DescribeAllEnumsAsStrings();
                options.DescribeStringEnumsInCamelCase();
            });

            services.AddTransient<IExtractApplicationService, ExtractApplicationService>();
            services.AddTransient<IExtractRepository, ExtractRepository>(provider =>
                new ExtractRepository(Configuration["File:Path"], Configuration["File:Name"]));
            services.AddTransient<ExtractMapper>();
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseHsts();
            }

            //app.UseHttpsRedirection();
            app.UseMvc();

            var defaultCulture = new CultureInfo("pt-BR");
            var supportedCultures = new[]
            {
                defaultCulture
            };

            app.UseRequestLocalization(new RequestLocalizationOptions
            {
                DefaultRequestCulture = new RequestCulture(defaultCulture),
                SupportedCultures = supportedCultures,
                SupportedUICultures = supportedCultures
            });

            JsonConvert.DefaultSettings = () => new JsonSerializerSettings
            {
                DateTimeZoneHandling = DateTimeZoneHandling.Utc
            };
            app.UseAuthentication();

            app.UseResponseCompression();

            //app.UseCors(x =>
            //{
            //    x.AllowAnyHeader();
            //    x.AllowAnyMethod();
            //    x.AllowAnyOrigin();
            //});

            app.UseMvc(routes =>
            {
                routes.MapRoute("", "{controller = Default, action = Index}");
            });

            app.UseSwagger(c =>
            {
                c.RouteTemplate = "api-docs/{documentName}/swagger.json";
                c.PreSerializeFilters.Add((swaggerDoc, httpReq) => swaggerDoc.Host = httpReq.Host.Value);
            });

            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/api-docs/v1/swagger.json", "Test API - v1.0.0");
            });
        }
    }
}
