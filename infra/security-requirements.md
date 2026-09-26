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

# Security requirements

- Given the 'internal_only' data handling posture, all components (document storage, vector database, LLM inference, logs) must reside within an isolated internal network segment. Strict Identity and Access Management (IAM) policies must be applied to limit access to sensitive internal networking documents and the system's runtime environment. Data at rest and in transit must be encrypted. Comprehen
- AuthN: Authenticated API access required for all inference endpoints
- AuthN: Service-to-service authentication for internal components
- AuthZ: Role-based access control for capability invocation
- AuthZ: Least-privilege access for knowledge source connectors
- AuthZ: Given the 'internal_only' data handling posture, all components (document storage, vector database, LLM inference, logs) must reside within an isolated internal network segment. Strict Identity and Access Management (IAM) policies must be applied to limit access to sensitive internal networking documents and the system's runtime environment. Data at rest and in transit must be encrypted. Comprehensive logging of all queries and responses, along with access attempts, is required for audit and security monitoring. No customer data or sensitive PII is expected, but general data hygiene and retention policies should be applied. Sensitive data triggers custody questions (residency, provider handling, encryption, networking, logging, retention, IAM, contractual/compliance). Private deployment becomes a hard requirement only when explicitly attested.
- AuthZ: Forge release governance will apply to all material changes, including updates to the synthetic document corpus (triggering re-indexing), changes to the embedding model or vector indexing strategy, modifications to the prompt engineering templates, and updates to the LLM used for inference. Each of these changes constitutes a candidate release. Acceptance criteria will include end-to-end latency targets (within 60 seconds), citation accuracy, and factual correctness as measured by a dedicated evaluation set of networking questions. Evidence of successful evaluation (e.g., ROUGE, faithfulness metrics, human review) must be collected and preserved with the promotion decision. A release will be labeled PASS if evidence satisfies policy, BLOCK if a requirement fails, or INSUFFICIENT EVIDENCE / NOT READY if evaluation data is incomplete.
- AuthZ: Retrieved content filtering and PII redaction
- Encryption at rest required
- Encryption in transit required
- No PII in logs without redaction
- Data residency constraints per org policy
- Apply org security controls
- Data classification: confidential
- Injection: Input sanitization and boundary enforcement
- Injection: System prompt isolation from user content
- Injection: Tool invocation allowlist enforcement
- Injection: input_validation_protection
- Injection: output_filtering_protection
- Injection: policy_enforcement_protection
- Audit: Promotion gate evidence for AI releases
- Secrets: API keys and credentials stored in secure secret store
- Secrets: No secrets in prompt templates or logs
- Secrets: Rotation policy for service credentials

## Boundaries

- Production traffic and corpora stay in customer-controlled accounts.
- Forge Control does not hold cloud credentials for apply from this scaffold.
- Validate unauthorized public access fails before promote.

## From Architecture Recommendation

Given the 'internal_only' data handling posture, all components (document storage, vector database, LLM inference, logs) must reside within an isolated internal network segment. Strict Identity and Access Management (IAM) policies must be applied to limit access to sensitive internal networking documents and the system's runtime environment. Data at rest and in transit must be encrypted. Comprehensive logging of all queries and responses, along with access attempts, is required for audit and security monitoring. No customer data or sensitive PII is expected, but general data hygiene and retention policies should be applied. Sensitive data triggers custody questions (residency, provider handling, encryption, networking, logging, retention, IAM, contractual/compliance). Private deployment becomes a hard requirement only when explicitly attested.
