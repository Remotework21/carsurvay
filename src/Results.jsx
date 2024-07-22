import React, { useEffect, useState } from 'react';
import './Survey.css';
import { db } from './firebase';
import { collection, getDocs } from 'firebase/firestore';

const Results = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, 'surveys'));
      const data = querySnapshot.docs.map(doc => doc.data());
      setResults(data);
    };

    fetchData();
  }, []);

  return (
    <div className="survey-container">
      <div className="nav-links">
        <a href="/">الاستبيان</a>
        <a href="/results">النتائج</a>
      </div>
      <div className="banner">
        <h1 className="title">نتائج الاستبيان</h1>
      </div>
      <div className="intro-box">
        <p>عدد الصفوف في الجدول: {results.length}</p>
      </div>
      <table className="results-table">
        <thead>
          <tr>
            <th>الاسم</th>
            <th>رقم الجوال</th>
            <th>اهتمامات السيارات</th>
            <th>أولويات قطع الغيار</th>
            <th>تصنيف قطع الغيار</th>
            <th>نوع الإكسسوارات</th>
            <th>عروض وإعلانات الورش</th>
            <th>تحديثات رياضة السيارات</th>
            <th>عروض الرعاة</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result, index) => (
            <tr key={index}>
              <td>{result.name}</td>
              <td>{result.phone}</td>
              <td>{result.carInterests.join(', ')}</td>
              <td>{result.sparePartsPriority}</td>
              <td>{result.sparePartsClassification}</td>
              <td>{result.accessoriesType.join(', ')}</td>
              <td>{result.workshopAdsOpinion}</td>
              <td>{result.carSportsUpdates}</td>
              <td>{result.specialOffersPreference}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Results;
