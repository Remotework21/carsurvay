import React, { useState } from 'react';
import { db } from './firebase';
import { collection, addDoc } from 'firebase/firestore';
import './Survey.css';

const Survey = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    carInterests: [],
    sparePartsPriority: [],
    sparePartsClassification: '',
    accessoriesType: [],
    workshopAdsOpinion: '',
    carSportsUpdates: '',
    specialOffersPreference: ''
  });

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    if (type === 'checkbox') {
      if (checked) {
        setFormData((prevData) => ({
          ...prevData,
          [name]: [...prevData[name], value]
        }));
      } else {
        setFormData((prevData) => ({
          ...prevData,
          [name]: prevData[name].filter((item) => item !== value)
        }));
      }
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'surveys'), formData);
      alert('تم إرسال الاستبيان بنجاح!');
      setFormData({
        name: '',
        phone: '',
        carInterests: [],
        sparePartsPriority: [],
        sparePartsClassification: '',
        accessoriesType: [],
        workshopAdsOpinion: '',
        carSportsUpdates: '',
        specialOffersPreference: ''
      });
    } catch (error) {
      console.error('Error adding document: ', error);
      alert('حدث خطأ أثناء إرسال الاستبيان. حاول مرة أخرى.');
    }
  };

  return (
    <div className="App">
      <div className="survey-container">
        <div className="nav-links">
          <a href="/">الاستبيان</a>
          <a href="/results">النتائج</a>
        </div>
        <div className="banner">
          <h1 className="title">سيارتي</h1>
          <div className="intro-box">
            <p>منصة تجمع محبي السيارات المعدلة</p>
            <p>قريبا اطلاق المنصة ..واجوبتك ستكون مفيدة</p>
          </div>
        </div>
        <form className="survey-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>ما أكثر الأمور التي تهمك في السيارات المعدلة والرياضية؟</label>
            <div className="checkbox-group">
              <label><input type="checkbox" name="carInterests" value="بيع وشراء السيارات" checked={formData.carInterests.includes("بيع وشراء السيارات")} onChange={handleChange} />بيع وشراء السيارات</label>
              <label><input type="checkbox" name="carInterests" value="قطع غيار السيارات" checked={formData.carInterests.includes("قطع غيار السيارات")} onChange={handleChange} />قطع غيار السيارات</label>
              <label><input type="checkbox" name="carInterests" value="إكسسوارات السيارات" checked={formData.carInterests.includes("إكسسوارات السيارات")} onChange={handleChange} />إكسسوارات السيارات</label>
              <label><input type="checkbox" name="carInterests" value="الورش والصيانة" checked={formData.carInterests.includes("الورش والصيانة")} onChange={handleChange} />الورش والصيانة</label>
              <label><input type="checkbox" name="carInterests" value="العروض والإعلانات الخاصة بالسيارات" checked={formData.carInterests.includes("العروض والإعلانات الخاصة بالسيارات")} onChange={handleChange} />العروض والإعلانات الخاصة بالسيارات</label>
            </div>
          </div>
          <div className="form-group">
            <label>ما هي أولوياتك عند البحث عن قطع غيار للسيارات؟</label>
            <div className="checkbox-group">
              <label><input type="checkbox" name="sparePartsPriority" value="محرك (ماكينة)" checked={formData.sparePartsPriority.includes("محرك (ماكينة)")} onChange={handleChange} />محرك (ماكينة)</label>
              <label><input type="checkbox" name="sparePartsPriority" value="ناقل الحركة (جير)" checked={formData.sparePartsPriority.includes("ناقل الحركة (جير)")} onChange={handleChange} />ناقل الحركة (جير)</label>
              <label><input type="checkbox" name="sparePartsPriority" value="أجزاء الهيكل (عضلات)" checked={formData.sparePartsPriority.includes("أجزاء الهيكل (عضلات)")} onChange={handleChange} />أجزاء الهيكل (عضلات)</label>
            </div>
          </div>
          <div className="form-group">
            <label>هل تفضل تصنيف قطع الغيار حسب النوع أم حسب الجزء؟</label>
            <div className="radio-group">
              <label><input type="radio" name="sparePartsClassification" value="حسب النوع" checked={formData.sparePartsClassification === "حسب النوع"} onChange={handleChange} />حسب النوع</label>
              <label><input type="radio" name="sparePartsClassification" value="حسب الجزء" checked={formData.sparePartsClassification === "حسب الجزء"} onChange={handleChange} />حسب الجزء</label>
            </div>
          </div>
          <div className="form-group">
            <label>ما هي أنواع الإكسسوارات التي تفضلها؟</label>
            <div className="checkbox-group">
              <label><input type="checkbox" name="accessoriesType" value="إكسسوارات داخلية" checked={formData.accessoriesType.includes("إكسسوارات داخلية")} onChange={handleChange} />إكسسوارات داخلية</label>
              <label><input type="checkbox" name="accessoriesType" value="إكسسوارات خارجية" checked={formData.accessoriesType.includes("إكسسوارات خارجية")} onChange={handleChange} />إكسسوارات خارجية</label>
              <label><input type="checkbox" name="accessoriesType" value="كلاهما" checked={formData.accessoriesType.includes("كلاهما")} onChange={handleChange} />كلاهما</label>
            </div>
          </div>
          <div className="form-group">
            <label>ما رأيك في إضافة قسم خاص بعروض وإعلانات الورش ومغاسل السيارات؟</label>
            <div className="radio-group">
              <label><input type="radio" name="workshopAdsOpinion" value="فكرة ممتازة" checked={formData.workshopAdsOpinion === "فكرة ممتازة"} onChange={handleChange} />فكرة ممتازة</label>
              <label><input type="radio" name="workshopAdsOpinion" value="لا أحتاجها" checked={formData.workshopAdsOpinion === "لا أحتاجها"} onChange={handleChange} />لا أحتاجها</label>
            </div>
          </div>
          <div className="form-group">
            <label>هل تفضل أن تكون هناك أخبار وتحديثات عن رياضة السيارات وبطولاتها في المنصة؟</label>
            <div className="radio-group">
              <label><input type="radio" name="carSportsUpdates" value="نعم" checked={formData.carSportsUpdates === "نعم"} onChange={handleChange} />نعم</label>
              <label><input type="radio" name="carSportsUpdates" value="لا" checked={formData.carSportsUpdates === "لا"} onChange={handleChange} />لا</label>
            </div>
          </div>
          <div className="form-group">
            <label>هل تفضل وجود رعاة وشركات تقدم عروض خاصة لمستخدمي المنصة؟</label>
            <div className="radio-group">
              <label><input type="radio" name="specialOffersPreference" value="نعم" checked={formData.specialOffersPreference === "نعم"} onChange={handleChange} />نعم</label>
              <label><input type="radio" name="specialOffersPreference" value="لا" checked={formData.specialOffersPreference === "لا"} onChange={handleChange} />لا</label>
            </div>
          </div>
          <div className="form-group">
            <label>الاسم:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>رقم الجوال:</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required pattern="^[0-9]{10}$" />
            <span className="validation-message">يرجى إدخال رقم جوال صحيح مكون من 10 أرقام.</span>
          </div>
          <button type="submit" className="submit-button">إرسال</button>
        </form>
      </div>
    </div>
  );
};

export default Survey;
