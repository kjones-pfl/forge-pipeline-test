<!-- forge-scaffold provenance
Generated from:
- AI Release: 62d188e9-38c4-4242-9de7-448582fa57a8
- Architecture Recommendation: a2d52ae2-9deb-45c5-9530-9cb3b7a0490c
- AI System Package: 08cfc40f-481c-4b9a-a8ac-d1a4cda9e4a4 (generated)
- Blueprint checksum: b606610c2ceab666…
- Approach: rag
- Provider Assessment / family: d3f9c4b1-db4d-4f6e-b2e3-8f7bc43ddb1c → azure_ai
- Engineering Spec agent_specification: 856e302e-f9a6-4787-a4f3-a4e9f3f0f873 v1 (65610909f13d…)
- Engineering Spec evaluation_specification: b784fe3b-da8b-47f9-94d1-87fd4b3f4820 v1 (15d6275c22cb…)
- Engineering Spec knowledge_specification: d1c3925a-f072-446c-a19f-2c2014271f60 v1 (e2bdfc1f93cf…)
- Engineering Spec model_specification: 463a47f7-a7dc-4297-963b-df2b063b1fa4 v1 (eeefff20075b…)
- Engineering Spec prompt_specification: 75639030-54c3-43ec-a3a8-e9323bb31581 v1 (5bab7c1ae094…)
- Engineering Spec retrieval_specification: 5afd95de-35a3-4e31-b38a-a87a7dec0b58 v1 (7aed269ea753…)
- Engineering Spec runtime_specification: 118ef100-3ce6-4ff2-bb89-7515ccd4418f v1 (b8cbacbc9aad…)
- Engineering Spec security_specification: ac8ed859-518d-4b82-b2b8-02637b193043 v1 (97e80f1719ac…)

Scaffold is implementation structure + contracts + eval hooks. It is not a deployed system and not a code sample dump.
-->

# Infrastructure resources (skeleton)

Generated from:
- AI Release: 62d188e9-38c4-4242-9de7-448582fa57a8
- Architecture Recommendation: a2d52ae2-9deb-45c5-9530-9cb3b7a0490c
- AI System Package: 08cfc40f-481c-4b9a-a8ac-d1a4cda9e4a4 (generated)
- Blueprint checksum: b606610c2ceab666…
- Approach: rag
- Provider Assessment / family: d3f9c4b1-db4d-4f6e-b2e3-8f7bc43ddb1c → azure_ai
- Engineering Spec agent_specification: 856e302e-f9a6-4787-a4f3-a4e9f3f0f873 v1 (65610909f13d…)
- Engineering Spec evaluation_specification: b784fe3b-da8b-47f9-94d1-87fd4b3f4820 v1 (15d6275c22cb…)
- Engineering Spec knowledge_specification: d1c3925a-f072-446c-a19f-2c2014271f60 v1 (e2bdfc1f93cf…)
- Engineering Spec model_specification: 463a47f7-a7dc-4297-963b-df2b063b1fa4 v1 (eeefff20075b…)
- Engineering Spec prompt_specification: 75639030-54c3-43ec-a3a8-e9323bb31581 v1 (5bab7c1ae094…)
- Engineering Spec retrieval_specification: 5afd95de-35a3-4e31-b38a-a87a7dec0b58 v1 (7aed269ea753…)
- Engineering Spec runtime_specification: 118ef100-3ce6-4ff2-bb89-7515ccd4418f v1 (b8cbacbc9aad…)
- Engineering Spec security_specification: ac8ed859-518d-4b82-b2b8-02637b193043 v1 (97e80f1719ac…)

Scaffold is implementation structure + contracts + eval hooks. It is not a deployed system and not a code sample dump.

Provider-resolved layout from the engineering plan. **Do not apply** — document and implement in the customer account.

## Provision document storage (`doc_storage`)

- **Resolution:** resolved
- **Generic capability:** Provision document storage
- **Provider:** Azure AI / Azure ML
- **Services / products:**
  - Azure AI Search index
- **Configuration:**
  - Customer provisions the AI Search service; Forge creates only the plan-bound index on the sealed endpoint.

## Implement ingestion pipeline (`ingestion`)

- **Resolution:** resolved
- **Generic capability:** Implement ingestion pipeline
- **Provider:** Azure AI / Azure ML
- **Services / products:**
  - Azure OpenAI embedding deployment
  - Azure AI Search index
- **Configuration:**
  - Select the embedding deployment in the customer subscription; keep it distinct from chat.
  - Customer provisions the AI Search service; Forge creates only the plan-bound index on the sealed endpoint.

## Implement retrieval service (`retrieval`)

- **Resolution:** resolved
- **Generic capability:** Implement retrieval service
- **Provider:** Azure AI / Azure ML
- **Services / products:**
  - Azure AI Search index
- **Configuration:**
  - Create vector fields on the plan-bound index; keep secrets in Key Vault.
  - Customer provisions the AI Search service; Forge creates only the plan-bound index on the sealed endpoint.

## Implement agent / generation path (`generation`)

- **Resolution:** resolved
- **Generic capability:** Implement agent / generation path
- **Provider:** Azure AI / Azure ML
- **Services / products:**
  - Azure OpenAI chat deployment
- **Configuration:**
  - Invoke under the sealed UAMI; no alternate public product surface from Ship.

## Implement evaluation harness (`eval_harness`)

- **Resolution:** resolved
- **Generic capability:** Implement evaluation harness
- **Provider:** Azure AI / Azure ML
- **Services / products:**
  - Azure AI Evaluation job
- **Configuration:**
  - Wire eval suite IDs into Azure AI Evaluation; Forge Gate consumes results.

## Prepare runtime / operate readiness (`runtime_ops`)

- **Resolution:** resolved
- **Generic capability:** Prepare runtime / operate readiness
- **Provider:** Azure AI / Azure ML
- **Services / products:**
  - Azure OpenAI chat deployment
  - Azure Monitor Activity Log
- **Configuration:**
  - Invoke under the sealed UAMI; no alternate public product surface from Ship.
  - Enable diagnostic settings to Log Analytics; link continuous evidence in Forge.
