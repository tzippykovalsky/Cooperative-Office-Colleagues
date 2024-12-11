import { useForm } from "react-hook-form";
import "./Form.css"
import axios from "axios";
import { useState } from "react";
const Form = ({selectedAddres,setSelectedAddres}) => {
    const [arr, setArr] = useState([])
    let { register, handleSubmit } = useForm();
    const save = (data) => {
        data.status = "search";
        console.log(data);


    }

    const complete = async (e) => {
        try {
            let res = await axios.get(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(e.target.value)}&limit=5`)
            console.log(res.data);
            //loading להוסיף עד שנטען

            setArr(res.data)
            console.log(res.data[0].display_name);

        }
        catch (err) {
            console.log(err);
        }

    }
    function chooseAdress(item){
        setSelectedAddres(item)
        setArr([item])
    }
    //register שומר אותם בסטייט חוסך לי עבודה

    return (
        <form className="form" onSubmit={handleSubmit(save)}>
            <label>userName</label>
            <input type="text" {...register("userName")} />
            <label>address</label>
            <input type="text" {...register("address", { onBlur: complete })} />
            {arr.length > 0 && (
                arr.map((item) => 
                (<li onClick={()=>{chooseAdress(item)}} key={item.place_id}>{item.display_name}</li>)))}
         
            <label>phone</label>
            <input type="text" {...register("phone")} />
            <label>email</label>
            <input type="email" {...register("email")} />
            <label>האם צריך אינטרנט</label>
            <input type="checkbox" {...register("internet")} />
            <label>האם צריך מכונת קפה</label>
            <input type="checkbox" {...register("coffee")} />
            <label>האם צריך מטבח</label>
            <input type="checkbox" {...register("kitchen")} />
            <label>מספר חדרים</label>
            <input type="number" {...register("numRooms")} />
            <label>מרחק שמוכן לזוז</label>
            <input type="number" {...register("distance")} />
            <input type="submit" />
        </form>
    );
}

export default Form;
//שלב 1
//יצירת טופס למשתמש עם כל השדות הרלוונטיים +טיפול בטופס שמירת הנתונים ובדיקות תקינות
//שלב 2
// יצירת מערך בסטייט הפעלת פונקציה כאשר משתמש מזין ערכים בשדה חיפוש
//הפונקציה תיגש לשרת ותשלוף את הנתונים תעדכן את המערך
//יש להציג את המערך
//שלב 3
//בעת לחיצה על אחת מהאפשרויות יש לשמור את אותו פריט כפריט נבחר
//שלב 4
//הצגת המפה ע"פ הספריות המיועדות
//שלב 5
//בעת טעינת הדף לטעון את המיקום הנוכחי 