
import { createSlice } from '@reduxjs/toolkit'
const recipes = [
    {
        id: 1,
        name: "דונאטס מצופים אבקת סוכר",
        preparationTime: "30",
        ingredients: ["אבקת סוכר", "קמח", "שמן", "סוכר"],
        category: "חלבי",
        isFavorite: false,
        img: '../images/p1.png'
    },
    {
        id: 2,
        name: "סופגניות אלפחורס ",
        preparationTime: "45",
        ingredients: ["אבקת סוכר", "קמח", "שמן", "סוכר"],
        category: "פרווה",
        isFavorite: false,
        img: '../images/p2.jpg'

    },
    {
        id: 3,
        name: "לביבות בטטה",
        preparationTime: "20",
        ingredients: ["אנטריקוט", "מלח", "פלפל"],
        category: "בשרי",
        isFavorite: false,
        img: '../images/p3.jpeg'

    },
    {
        id: 4,
        name: "לביבות גבינה ",
        preparationTime: "15",
        ingredients: ["קמח", "גבינה", "שמן", "לימון"],
        category: "חלבי",
        isFavorite: false,
        img: '../images/p4.png'
    },
    {
        id: 5,
        name: "סופגניות חלה בציפוי סוכר וקינמון",
        preparationTime: "60 ",
        ingredients: ["קינמון", "שמן", "ביצים", "סוכר", "קמח"],
        category: "חלבי",
        isFavorite: false,
        img: '../images/p5.jpg'

    },
    {
        id: 6,
        name: "לביבות מיקי מאוס",
        preparationTime: "40 ",
        ingredients: ["עוף", "פנקו", "ביצה", "תיבול"],
        category: "בשרי",
        isFavorite: false,
        img: '../images/p6.jpg'

    },
    {
        id: 7,
        name: "סופגניות בטעם של פעם ",
        preparationTime: "50 ",
        ingredients: ["ריבה", "קמח", " שמן"],
        category: "פרווה",
        isFavorite: false,
        img: '../images/p7.jpg'

    },
    {
        id: 8,
        name: " סופגניות מרובעות",
        preparationTime: "30",
        ingredients: ["דגים", "בצל", "תבלינים"],
        category: "פרווה",
        isFavorite: false,
        img: '../images/p8.webp'

    },
    {
        id: 9,
        name: "פנקייקים",
        preparationTime: "20",
        ingredients: ["קמח", "חלב", "ביצה", "סוכר"],
        category: "חלבי",
        isFavorite: false,
        img: '../images/p9.webp'

    },
    {
        id: 10,
        name: "לביבות בטטה",
        preparationTime: "90",
        ingredients: ["בטטה", "גזר","בצל", "תפוח אדמה", "תיבול"],
        category: "בשרי",
        isFavorite: false,
        img: '../images/p10.jpg'

    },
    {
        id: 11,
        name: " דונאטס",
        preparationTime: "60",
        ingredients: ["קמח", "חמאה", "אבקת אפיה", "סוכר וניל"],
        category: "פרווה",
        isFavorite: false,
        img: '../images/p11.jpg'


    },
    {
        id: 12,
        name: "עוגיות בצורת סביבון",
        preparationTime: "40",
        ingredients: ["קמח", "מים ", "שמן", "אבקת סוחר"],
        category: "פרווה",
        isFavorite: false,
        img: '../images/p12.jpg'


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