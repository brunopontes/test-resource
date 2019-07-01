FROM microsoft/dotnet:2.2-aspnetcore-runtime AS base
WORKDIR /app
EXPOSE 80

FROM microsoft/dotnet:2.2-sdk AS build
WORKDIR /src
COPY ["TestResource.Api/TestResource.Api.csproj", "TestResource.Api/"]
COPY ["TestResource.Repository/TestResource.Repository.csproj", "TestResource.Repository/"]
COPY ["TestResource.Domain/TestResource.Domain.csproj", "TestResource.Domain/"]
COPY ["TestResource.ApplicationService/TestResource.ApplicationService.csproj", "TestResource.ApplicationService/"]
RUN dotnet restore "TestResource.Api/TestResource.Api.csproj"
COPY . .
WORKDIR "/src/TestResource.Api"
RUN dotnet build "TestResource.Api.csproj" -c Release -o /app

FROM build AS publish
RUN dotnet publish "TestResource.Api.csproj" -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "TestResource.Api.dll"]