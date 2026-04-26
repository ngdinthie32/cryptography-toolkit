# 🔍 QA Testing Checklist - Cryptography Toolkit

## 1. SUBMISSION REQUIREMENTS ✅

### 1.1 Version Control System (VCS)
- [x] Project hosted on GitHub/GitLab/Bitbucket
  - ✅ Repository: https://github.com/ngdinthie32/cryptography-toolkit
  - ✅ Public/Shared access

### 1.2 Team Contribution (Commit History)
- [x] All team members have commits
  - ✅ Nguyễn Đình Thiện (thinh) - Commits found
  - ✅ Trần Hưng Thịnh (thinh) - Commits found
  - ✅ Trương Đình Tấn Tài (tam/mtam) - Commits found
  - ⚠️ Nguyễn Minh Tâm - Need verification
  - ⚠️ Phạm Quốc Thắng - Need verification

### 1.3 Report File (MISSING ❌)
**Status:** ❌ NOT FOUND
- [ ] Word/PDF/Notion document required with:
  - [ ] Team members list
  - [ ] Libraries used
  - [ ] Code organization explanation
  - [ ] Screenshots/Demo of each feature

**Action Required:** Create report file immediately


## 2. SETUP & DEPENDENCIES ✅

### 2.1 Backend Setup
- [x] Node.js dependencies installed
- [ ] Backend npm run dev script missing
  - ❌ **ISSUE**: package.json has no "dev" script
  - **Fix needed**: Add `"dev": "node server.js"` to scripts

### 2.2 Frontend Setup
- [x] React/Vite dependencies installed
- [x] Frontend npm run dev script exists


## 3. APPLICATION FUNCTIONALITY TESTING

### 3.1 Server Startup
- [ ] Backend starts without errors on port 5000
- [ ] Frontend starts without errors on port 5173
- [ ] CORS headers configured correctly

### 3.2 Symmetric Encryption (AES, DES, 3DES)
API Endpoints to test:
- [ ] GET `/api/crypto/gen-key` - Generate encryption key
- [ ] POST `/api/crypto/encrypt` - Encrypt data
- [ ] POST `/api/crypto/decrypt` - Decrypt data
- [ ] POST `/api/crypto/hash` - Hash data (MD5, SHA-256)

Test Cases:
- [ ] Valid key size encryption ✅
- [ ] Invalid key size → Error handling ❌
- [ ] Invalid data format → Error handling ❌
- [ ] Empty input → Error handling ❌

### 3.3 Asymmetric Encryption (RSA)
API Endpoints to test:
- [ ] POST `/api/rsa/generate-keys` - Generate key pair
- [ ] POST `/api/rsa/encrypt` - RSA encryption
- [ ] POST `/api/rsa/decrypt` - RSA decryption

Test Cases:
- [ ] Valid key pair generation ✅
- [ ] Valid encryption/decryption ✅
- [ ] Invalid key format → Error handling ❌
- [ ] Invalid data size → Error handling ❌

### 3.4 Frontend UI/UX
- [ ] All forms render correctly
- [ ] Form inputs accept user data
- [ ] API responses display properly
- [ ] Loading states visible
- [ ] Error messages display clearly
- [ ] No console errors
- [ ] Responsive design works

### 3.5 Error Handling & Robustness
**Critical Requirement**: App must not crash with invalid input

Test with invalid inputs:
- [ ] Key size: 0, -1, 999, "abc", null
- [ ] Plaintext: empty, very long, special chars, null
- [ ] Ciphertext: null, empty, invalid format
- [ ] Invalid JSON from API responses
- [ ] Network timeout scenarios
- [ ] Missing API response fields

Expected behavior:
- ✅ Show user-friendly error message
- ✅ App continues to work (no crash)
- ✅ Console logs contain error details for debugging


## 4. API ENDPOINT VALIDATION

### 4.1 Test API
```
GET /api/test
Expected Response: { message: "Backend NodeJS đã kết nối thành công!" }
```
- [ ] Endpoint responds correctly
- [ ] CORS headers present in response

### 4.2 Crypto Endpoints
```
GET /api/crypto/gen-key
POST /api/crypto/encrypt
POST /api/crypto/decrypt  
POST /api/crypto/hash
```
- [ ] All endpoints reachable
- [ ] Correct HTTP methods
- [ ] Response format matches frontend expectations
- [ ] Error responses have proper status codes

### 4.3 RSA Endpoints
```
POST /api/rsa/generate-keys
POST /api/rsa/encrypt
POST /api/rsa/decrypt
```
- [ ] All endpoints reachable
- [ ] Correct HTTP methods
- [ ] Response format matches frontend expectations


## 5. COMPLETENESS CHECKLIST

- [ ] No crashes when running
- [ ] No crashes with invalid key sizes
- [ ] No crashes with invalid data formats
- [ ] All features working as expected
- [ ] Error handling implemented on both frontend & backend
- [ ] User can complete full workflow:
  - [ ] 1. Generate/Input keys
  - [ ] 2. Input plaintext/ciphertext
  - [ ] 3. Encrypt/Decrypt/Hash
  - [ ] 4. View results
  - [ ] 5. Copy results


## 6. ISSUES FOUND

### Critical ❌
1. **Missing Report File** - Required for submission
2. **Backend missing npm dev script** - Cannot run `npm run dev`

### High Priority ⚠️
3. **Team member verification** - Nguyễn Minh Tâm & Phạm Quốc Thắng commits not found

### Testing Blockers 🚫
- Cannot test backend without fixing the dev script


## 7. ADDITIONAL NOTES

- Project uses Express.js + React/Vite combination
- crypto-js library for symmetric algorithms
- Node crypto module likely used for RSA
- CORS middleware configured
- Both backend and frontend require separate npm install + npm run dev

---

**Tester**: Phạm Quốc Thắng  
**Date**: April 26, 2026  
**Status**: 🔴 BLOCKING ISSUES - Cannot proceed with full testing

