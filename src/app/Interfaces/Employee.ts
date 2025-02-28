export interface Employee {
    EMP_ID: string;
    EMP_PASSWORD: string;
    EMP_ROLE: string;
    EMP_DEPARTMENT: string;
    EMP_POSITION: string;
    EMP_NAME: string;
    EMP_GENDER: 'Male' | 'Female' | 'Other';
    EMP_BIRTHDATE: string; // ใช้ string แทน Date เพื่อให้สอดคล้องกับ JSON
    EMP_ADDRESS: string;
    EMP_PHONE: string;
    EMP_EMAIL: string;
    EMP_PIC?: string | null; // สามารถเป็น null ได้
    EMP_STATUS: 'Active' | 'Inactive' | 'Suspended' | 'Change';
}