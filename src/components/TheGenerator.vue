<template>
    <q-editor :toolbar=[] :readonly=true dir="rtl" v-model="answer"></q-editor>
    <select v-model="selected.school" name="" id="">
        <option value="dialog">דיאלוג</option>
        <option value="diploma">דיפלומה</option>
        <option value="meirav">מירב</option>
        <option value="tafnit">תפנית</option>
    </select>
</template>
<script>
export default{
  props:{

  },
  emits:[],
  data() {
    return{
        answer: null,
        selected:{
            school:null
        },
        school: 'דיפלומה',
        course: 'ניהול עיצוב והפקת אירועים',
        time: {day:'ראשון',date:'11.6',hours:'17:00-20:15'},
        location: {building:'אקדמיה',floor:'1',classType:'חדר',roomNum:'101'},
        coordinator: {email:'jjsj@jjsj.com'},
        buildings: ['אקדמיה','טכנולוגיות','הכיכר','הספרייה','מודיעין/ביטחון'],
        schools: [{title:'דיפלומה',manager:{name:'מיכל זינגר', title:'מיכל זינגר - מנהלת ביה"ס דיפלומה'}},{title:'דיאלוג',manager:{name:'תמיר אגסי', title:'תמיר אגסי - מנהל ביה"ס דיאלוג'}},{title:'מירב',manager:{name:'שאול פורת', title:'שאול פורת - מרכז מקצועי'}},{title:'תפנית',manager:{name:'תמי גוילי', title:'תמי גוילי - מנהלת ביה"ס תפנית'}}],
        shlocha: {shlocha:'רעננה',office:'בניין טכנולוגיות, קומה2 חדר 208',phone:'097780880',coordinators:[{name:'שירן אביר', email:'shirabir@openu.ac.il', title:'שירן אביר – רכזת אדמיניסטרטיבית'},{name:'עמית פינקלשטיין', email:'amitfi@openu.ac.il', title:'עמית פינקלשטיין – רכזת אדמיניסטרטיבית'}]}

    }
},
created(){
    this.generateEmail()
},
methods:{
    generateEmail(){
    this.answer = `שלום לכולם,<br>
    <br>
    אנו מברכים אתכם על הצטרפותכם לשורות תלמידי בית הספר ${this.selected.school}
    בקורס "${this.course}" בשלוחת רעננה.<br>
    <br>
    איפה ומתי?<br>
    השיעור הראשון יתקיים ביום ${this.time.day} ${this.time.date} בין השעות ${this.time.hours}.<br>
    השיעור יתקיים בבניין ${this.location.building} קומה ${this.location.floor} ב${this.location.classType} ${this.location.roomNum}.<br>
    <b>בכל מפגש יש להתעדכן בקשר לכיתת הלימוד עם הגעתכם במסך הפלזמה בכניסה לקמפוס.</b><br>
    <br>
    כתובתנו : קמפוס רעננה – רח' האוניברסיטה 1.<br>
    משרדינו : בניין "טכנולוגיות", קומה 2, חדר 208.<br>
    מייל: ${this.coordinator.email}<br>
    טלפון במשרד: ${this.shlocha.phone} <br>
    תוכלו לחנות בחניון הקמפוס. שימו לב שהחניה היא על בסיס מקום פנוי, לכן כדאי להקדים מעט.<br>
    <br>
    מומלץ להצטייד ב:<br>
    •	כלי כתיבה <br>
    •	מחברת
    <br>
    <br>
    שכר לימוד<br>
    יש להסדיר את התשלום עבור שכר הלימוד לפני מועד השיעור הראשון.<br>
    רק תלמידים שהסדירו את התשלום על מלוא שכר הלימוד יוכלו להשתתף בשיעורים.<br>
    להסדרת התשלום אנא פנו לצוות השלוחה. <br>
    מומלץ לתאם מראש זמן הגעה. <br>
    <br>
    מצורפים למייל נוהלי הקורס ונוהלי ביטול.<br>
    אנא קראו אותם, יחולקו בשיעור הראשון לחתימה.<br>
    <br>
    אנו מאחלות לכם הצלחה רבה בלימודיכם ולימודים פוריים ומאתגרים.<br>
    <br>
    <br>
    ${this.shlocha.coordinators[0].title}<br>
    עידית לאופמן פורמן – מנהלת שלוחת המרכז<br>
    ${this.schools[0].manager.title}<br>
    `
    }
}
}
</script>
