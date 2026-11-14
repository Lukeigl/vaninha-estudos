# Verification · 2026-11-14

- 15 automated tests passed: core scoring, balanced selection, review handling, storage fallback, guided progress, notes, exams and flashcards.
- Encryption round-trip passed with the provided credentials; incorrect credentials and altered data rejected. No plaintext credentials found in files prepared for Git.
- Content validation: five modules, six stages each, 60 unique objective questions, 15 essays and valid topic references. Original DOCX downloads match SHA-256 hashes of all five unique inputs. 72 extracted image occurrences inspected on contact sheets.
- Independent read-only review covered app, crypto and chemistry content. Addressed all three findings: standalone flashcard wording, malformed history handling and the methanoic-acid exception to a too-broad carbonyl shortcut.
- Browser checks: incorrect login, successful unlock, guided progress and notes, original structures and enlargement, mobile exam without premature answer feedback, result with unanswered questions, and re-lock on refresh.
- Responsive checks at 1366×900 and 390×844: no horizontal page overflow. Source diagrams retain their original resolution and support enlargement.
- GitHub Pages build and deployment completed successfully (run 43612678619). Public endpoint access from this workstation failed with a connection reset during HTTPS negotiation; production browser login could not be confirmed. Local browser login and the complete protected-content flow passed.

Limits: progress is browser-local; no cross-device synchronization or server accounts. Authored exercises are not an official complete answer key to the supplied lists.
