export interface Employee {
    EMP_ID: number;
    EMP_USERNAME: string;
    EMP_PASSWORD: string;
    EMP_ROLE: string;
    EMP_NAME: string;
    EMP_NATIONAL_ID: string;
    EMP_DOB: string; // ใช้ string เนื่องจาก Date อาจต้องแปลงจากฐานข้อมูล
    EMP_GENDER: 'Male' | 'Female' | 'Other';
    EMP_NATIONAL: string;
    EMP_ADDRESS: string;
    EMP_EMAIL: string;
    EMP_PHONE: string;
    EMP_JOB_TITLE: string;
    EMP_DEPARTMENT: string;
    EMP_TYPE: 'Full-Time' | 'Part-Time' | 'Contract';
    EMP_JOIN_DATE: string; // ใช้ string เพื่อรองรับรูปแบบวันที่จากฐานข้อมูล
    EMP_PIC?: string | null;
    EMP_STATUS: 'Active' | 'Inactive' | 'Suspended' | 'Change' | 'Lock';
    EMP_CREATED?: string; // ใช้ string เพราะ timestamp จะมาในรูปแบบ ISO
    EMP_UPDATED?: string; // ใช้ string เพราะ timestamp จะมาในรูปแบบ ISO
    DEP_NAME?: string;
    JOT_NAME?: string;
}