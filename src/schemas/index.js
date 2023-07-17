import * as yup from 'yup';

export const basicSchema=yup.object().shape({
    name:yup.string().name('Lütfen kurs adını giriniz.').required('Kurs adı girmek zorunludur.'),
    description:yup.string().name('Lütfen kursun açıklamasını giriniz.').required('Kurs açıklamasını girmek zorunludur.'),
    cost:yup.number().positive('Lütfen fiyat bilgisini pozitif sayı olacak şekilde giriniz.').integer('Fiyat tamsayı olmak zorundadır.').required('Fiyat bilgisi girmek zorunludur.')
 
 
    // email:yup.string().email('Geçerli bir email giriniz...').required('Email girmek zorunludur...'),
    // age:yup.number().positive('Lütfen pozitif bir yaş giriniz...').integer('Lütfen yaşınızı tamsayı olarak giriniz...').required('Yaş girmek zorunludur'),
    // confirmPassword:yup.string().oneOf([yup.ref('password')],'Şifreler eşleşmiyor').required('Tekrar şifre girmek zorunludur...'),
});