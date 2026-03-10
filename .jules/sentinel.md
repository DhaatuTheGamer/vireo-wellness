## 2024-05-24 - DoS vulnerability via missing maxLength on inputs
**Vulnerability:** Input fields in forms lacked the `maxLength` property, exposing the application to potential Denial of Service (DoS) attacks by allowing excessively long input strings.
**Learning:** Found in `screens/LoginScreen.tsx` and `components/settings/ProfileSection.tsx`. Input fields taking strings must always have a maximum length defined to prevent memory exhaustion and excessive processing on both client and server sides.
**Prevention:** Implement a standard practice of defining `maxLength` on all input fields taking strings during development and code review processes.
