
import { teal } from '@mui/material/colors';
import { createSlice } from '@reduxjs/toolkit'
const recipes = [
    {
        id: 1,
        name: "לחמניות שקשוקה",
        preparationTime: "30",
        ingredients: ["4 ביצים", "רוטב לשקשוקה קנוי או ביתי", "4 לחמניות מכל סוג שאוהבים", "תוספות (לא חובה): קוביות גבינה בולגרית, פטה, מוצרלה, גבינה צהובה"],
        category: "חלבי",
        isFavorite: false,
        img: '../images/p1.webp',
        text:", קבלו מתכון ללחמניות שקשוקה אפויות בתנור. מתכון נהדר ומהיר לארוחת בוקר או ערב.",
        prepare:"-מחממים תנור מראש ל-180 מעלות.-חותכים עיגול רחב בחלק העליון של הלחמניות כך שישאר דופן של כ-2 ס”מ מסביב.-מניחים בכל שקע של לחמניה 2-3 כפות גדושות רוטב שקשוקה ומוסיפים מעל ביצה. מפזרים תוספות שאוהבים ומעט פטרוזיליה קצוצה.-מניחים בתבנית על נייר אפיה, מכניסים לתנור החם ואופים במשך 15-20 דקות (לפי מידת העשיה של הביצים שאתם אוהבים)."
    },
    {
        id: 2,
        name: "שייק תות בננה",
        preparationTime: "7",
        ingredients: ["אבקת סוכר", "קמח", "שמן", "סוכר"],
        category: "פרווה",
        isFavorite: false,
        img: '../images/p2.webp',
        text:"כשבריאות וטעם נפגשים: שייק תות בננה במרקם גלידתי עם תוספות בריאות (זרעי צ'יה ושקדים)."
    },
    {
        id: 3,
        name: "קונוס אבוקדו",
        preparationTime: "20",
        ingredients: ["אנטריקוט", "מלח", "פלפל"],
        category: "בשרי",
        isFavorite: false,
        img: '../images/p3.webp',
        text:"ארוחת בוקר טעימה ובריאה: קונוס טורטיה פריך במילוי גואקמולי (ממרח אבוקדו עם עגבניות ובצל)."

    },
    {
        id: 4,
        name: "סלט יווני  ",
        preparationTime: "15",
        ingredients: ["קמח", "גבינה", "שמן", "לימון"],
        category: "חלבי",
        isFavorite: false,
        img: '../images/p4.webp',
        text:'סלט יווני מפנק בריא וטעים עם גבינת פטה ואורגנו מיובש מעל. מושלם לאירוח חלבי או לארוחת ערב'
    },
    {
        id: 5,
        name: "פילה עוף במחבת",
        preparationTime: "60 ",
        ingredients: ["קינמון", "שמן", "ביצים", "סוכר", "קמח"],
        category: "בשרי",
        isFavorite: false,
        img: '../images/p5.webp',
        text:"ארוחת צהריים מהירה וטעימה לכל המשפחה: פילה עוף במחבת בתיבול שווארמה.",

    },
    {
        id: 6,
        name: "שווארמה בתבנית",
        preparationTime: "40 ",
        ingredients: ["עוף", "פנקו", "ביצה", "תיבול"],
        category: "בשרי",
        isFavorite: false,
        img: '../images/p6.webp',
        text:"ארוחת צהריים מהירה וטעימה: שווארמה בתבנית מתובלת היטב שמכינים בקלות. מומלץ להגיש עם פיתות, טחינה וסלט קצוץ"

    },
    {
        id: 7,
        name: "אורז מוקפץ עם פרגית",
        preparationTime: "50 ",
        ingredients: ["ריבה", "קמח", " שמן"],
        category: "בשרי",
        isFavorite: false,
        img: '../images/p7.webp',
        text:'נשאר לכם אורז לבן מבושל במקרר? הכינו תבשיל בסיר אחד ב-10 דקות!'

    },
    {
        id: 8,
        name: " פסטה עם חזה עוף",
        preparationTime: "30",
        ingredients: ["דגים", "בצל", "תבלינים"],
        category: "בשרי",
        isFavorite: false,
        img: '../images/p8.webp',
        text:"ארוחת צהריים בסיר אחד: פסטה עם קוביות חזה עוף עם שני סוגי תיבול שונים"

    },
    {
        id: 9,
        name: "עוגת ביסקוויטים והשחר",
        preparationTime: "20",
        ingredients: ["קמח", "חלב", "ביצה", "סוכר"],
        category: "חלבי",
        isFavorite: false,
        img: '../images/p9.webp',
        text:"עוגת ביסקוויטים עם שכבות קרם וניל וממרח השחר - שילוב טעמים משגע."

    },
    {
        id: 10,
        name: " ריבועי גבינה קפואים",
        preparationTime: "9",
        ingredients: ["בטטה", "גזר","בצל", "תפוח אדמה", "תיבול"],
        category: "חלבי",
        isFavorite: false,
        img: '../images/p10.webp',
        text:"קינוח חלבי מושלם לשבועות או לכל אירוח חלבי: ריבועי לוטוס, קרם גבינה ושוקולד לבן."

    },
    {
        id: 11,
        name: " מרק כתום עם עדשים",
        preparationTime: "10",
        ingredients: ["קמח", "חמאה", "אבקת אפיה", "סוכר וניל"],
        category: "פרווה",
        isFavorite: false,
        img: '../images/p11.webp',
        text:"מרק כתום עם עדשים אדומות (כתומות), בטטה וגזר שמכינים בקלי קלות. מתכון למרק משביע, בריא וטעים במיוחד."


    },
    {
        id: 12,
        name: "לחמניות בצל",
        preparationTime: "10",
        ingredients: ["קמח", "מים ", "שמן", "אבקת סוחר"],
        category: "פרווה",
        isFavorite: false,
        img: '../images/p12.webp',
        text:"יותר טעים ממה שקונים במאפיות: לחמניות שמרים רכות וטעימות עם בצל מטוגן"


    }
   
];
const recipesSlice = createSlice({
    name: "recipes",
    initialState: recipes,
    reducers: {
        toggle_favorite: (state, action) => {
            const recipe = state.find(recipe => recipe.id === action.payload);
            if (recipe) {
                recipe.isFavorite = !recipe.isFavorite;
            }
        },
        addRecipe: (state, action) => {debugger
            const newRecipes = {
                id: state.length + 1,
                name: action.payload.Name,
                preparationTime: action.payload.PreparationTime,
                ingredients:action.payload.Product ,
                category: action.payload.Category,
                isFavorite: false,
                img: action.payload.Img

            }

            state.push(newRecipes);
            console.log(state.length)

        }
    }
});

export const { toggle_favorite, addRecipe } = recipesSlice.actions
export default recipesSlice.reducer