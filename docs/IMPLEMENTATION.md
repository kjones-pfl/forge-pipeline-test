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

# IMPLEMENTATION.md

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

## What Forge generated

- Provider-resolved engineering plan → this scaffold
- Infra skeleton (variables schema, resources, security requirements, one infrastructure module)
- Application skeleton (`node app/skeleton.mjs`)
- Application contracts (ingestion / retrieval / generation when applicable)
- Evaluation harness hooks (thresholds + example cases)
- CI workflow that runs startup and the skeleton, and does not deploy

## Workspace startup

From a clean checkout of this scaffold, with no secret values in the files:

1. `node workspace/check.mjs bootstrap`
2. `node workspace/check.mjs start`
3. `node workspace/check.mjs health`

Secret configuration stays in `infra/variables.schema.json` as vault references. The check fails if a secret placeholder has a default value.

## Build order

1. Provision document storage
2. Implement ingestion pipeline
3. Implement retrieval service
4. Implement agent / generation path
5. Implement evaluation harness
6. Prepare runtime / operate readiness

## Business intent

Answer internal networking questions from synthetic documents only. A cited answer within 60 seconds meets the requirement. Access stays inside this staging system. No customer data is in scope.

## Dependencies

- Assumption: Unknown: Specific LLM model. Provisional assumption: A commercially available LLM can satisfy the 'facts_only' and 'cited answer' requirements with effective prompt engineering. Consequence: The LLM inference service must be able to integrate with the chosen model. Validation required: Evaluate chosen LLM for factual accuracy and citation capability on a representative dataset.
- Assumption: Unknown: Volume and complexity of synthetic documents. Provisional assumption: The corpus size is manageable for a single vector index and does not require distributed indexing solutions initially. Consequence: The ingestion pipeline and vector store will be designed for incremental updates. Validation required: Profile ingestion performance and retrieval latency with a realistic document set size.
- Assumption: Unknown: Peak query load. Provisional assumption: Initial query load will be moderate, allowing for a cost-effective, potentially auto-scaling inference backend. Consequence: The LLM inference service should be deployable in an elastic manner. Validation required: Monitor system performance and scaling behavior under load testing.
- Assumption: Unknown: Specific internal networking topics or document formats. Provisional assumption: Synthetic documents are primarily text-based and parseable into coherent chunks for embedding. Consequence: The document processing component will focus on text extraction and chunking, potentially with minor pre-processing for common document types. Validation required: Test parsing and chunking effectiveness across a sample of synthetic documents.
- Assumption: UNKNOWN: training/preference data availability. PROVISIONAL: do not assume fine-tuning data exists. Consequence: RAG-first; adaptation deferred pending evidence. Validation: collect training evidence only if adaptation becomes justified.
- Provider family selection (Studio Provider assessment — after approval unless already chosen)
- Approved corpus / document owners
- Org policy for Promotion Gate mode (shadow vs enforce)
- Implement ingestion pipeline depends on: doc_storage
- Implement retrieval service depends on: ingestion
- Implement agent / generation path depends on: retrieval
- Implement evaluation harness depends on: generation
- Prepare runtime / operate readiness depends on: eval_harness
