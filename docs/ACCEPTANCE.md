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

# ACCEPTANCE.md

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

## Definition of done

- All implementation tasks above completed or explicitly deferred with owner
- Evaluation harness passes committed thresholds on the candidate
- Security requirements verified or risk-accepted on the Release Record
- Promotion Gate decision recorded with evidence
- Audit Package exportable from the Release Record
- Runtime/operate readiness documented for the promoted capability

## Plan acceptance criteria

- Unauthorized public access test fails
- Objects are encrypted at rest
- Access limited to the service identity and approved operators
- Evaluation corpus indexes successfully
- Zero missing required metadata on indexed chunks
- retrieval_relevance
- answer_grounding
- Retrieval eval: grounding_score ≥ 0.8
- Retrieval eval: citation_accuracy ≥ 0.85
- Retrieval eval: recall_at_k ≥ 0.7
- Prove records grounding_score
- Prove records citation_accuracy
- Prove records recall_at_k
- Prove records answer_relevance
- Every answer-bound hit includes a stable source id
- safety_score ≥ 0.95
- answer_relevance ≥ 0.8
- factual_consistency
- source_attribution_accuracy
- Responses cite sources when the prove contract requires grounding
- Validate model dimension: instruction_following
- Validate model dimension: reasoning
- Regression eval suite tied to promotion gate
- Retrieval grounding accuracy and citation fidelity checks
- Prove chunking quality before promote: grounding_score, citation_accuracy, recall_at_k, answer_relevance
- Governed, structure-aware chunks with citations — verify grounding and citation accuracy before release approval.
- Measure grounding_fidelity
- Measure policy_compliance
- Measure grounding_score
- Measure citation_accuracy
- Measure recall_at_k
- Measure answer_relevance

## Explicit human-owned gaps

- Forge does not provision cloud resources from this scaffold — customer implements and operates.
- No live `terraform apply` / Bicep deploy is included — infra/ is a skeleton and requirements only.
