// Forge infrastructure skeleton. Do not deploy. No resources are declared.
targetScope = 'resourceGroup'

@description('Target environment placeholder')
param environment string

@description('Customer region. Human-owned.')
param region string

@description('Vault reference name for the provider credential. Not a secret value.')
param providerApiKeyRef string

// Planned work: Provision document storage, Implement ingestion pipeline, Implement retrieval service, Implement agent / generation path, Implement evaluation harness, Prepare runtime / operate readiness
output skeletonNote string = 'Skeleton only for azure_ai. Do not deploy.'
