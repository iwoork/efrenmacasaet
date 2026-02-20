# Agent Build Instructions

## Project Setup
```bash
# Install dependencies
npm install

# If project not yet initialized, scaffold with:
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
```

## Running Tests
```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run with coverage
npm run test:coverage
```

## Build Commands
```bash
# Development build
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint
npm run lint
```

## Development Server
```bash
# Start development server (default: http://localhost:3000)
npm run dev
```

## Lighthouse Audit
```bash
# Build and start production server, then run lighthouse
npm run build && npm start
# In another terminal:
npx lighthouse http://localhost:3000 --output html --output-path ./lighthouse-report.html
```

## Key Learnings
- Update this section when you learn new build optimizations
- Document any gotchas or special setup requirements
- Keep track of the fastest test/build cycle

## Feature Development Quality Standards

**CRITICAL**: All new features MUST meet the following mandatory requirements before being considered complete.

### Testing Requirements

- **Minimum Coverage**: 85% code coverage ratio required for all new code
- **Test Pass Rate**: 100% - all tests must pass, no exceptions
- **Test Types Required**:
  - Unit tests for all components
  - Integration tests for page composition
- **Coverage Validation**: Run coverage reports before marking features complete:
  ```bash
  npm run test:coverage
  ```
- **Test Quality**: Tests must validate behavior, not just achieve coverage metrics

### Git Workflow Requirements

Before moving to the next feature, ALL changes must be:

1. **Committed with Clear Messages**:
   ```bash
   git add .
   git commit -m "feat(section): descriptive message following conventional commits"
   ```
   - Use conventional commit format: `feat:`, `fix:`, `docs:`, `test:`, `refactor:`, etc.
   - Include scope when applicable: `feat(hero):`, `feat(footer):`, `fix(nav):`

2. **Pushed to Remote Repository**:
   ```bash
   git push origin <branch-name>
   ```

3. **Branch Hygiene**:
   - Work on feature branches, never directly on `main`
   - Branch naming: `feature/<feature-name>`, `fix/<issue-name>`

4. **Ralph Integration**:
   - Update .ralph/fix_plan.md with new tasks before starting work
   - Mark items complete in .ralph/fix_plan.md upon completion
   - Update .ralph/PROMPT.md if development patterns change

### Feature Completion Checklist

Before marking ANY feature as complete, verify:

- [ ] All tests pass (`npm test`)
- [ ] Code coverage meets 85% minimum threshold
- [ ] No TypeScript errors (`npx tsc --noEmit`)
- [ ] No lint errors (`npm run lint`)
- [ ] All changes committed with conventional commit messages
- [ ] All commits pushed to remote repository
- [ ] .ralph/fix_plan.md task marked as complete
- [ ] Responsive design verified (mobile + desktop)
- [ ] Production build succeeds (`npm run build`)
