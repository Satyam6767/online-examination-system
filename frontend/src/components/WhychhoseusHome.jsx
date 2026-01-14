import React from 'react'
import CardWhyUs from './CardWhyUs'

function WhychhoseusHome() {


  const imgarr =[
    "https://cdn-icons-png.freepik.com/256/7872/7872899.png?uid=R151164025&ga=GA1.1.576781860.1727952383&semt=ais_hybrid",
    "https://cdn-icons-png.freepik.com/256/9623/9623859.png?uid=R151164025&ga=GA1.1.576781860.1727952383",
    "https://cdn-icons-png.freepik.com/256/9623/9623750.png?uid=R151164025&ga=GA1.1.576781860.1727952383",
    "https://cdn-icons-png.freepik.com/256/15714/15714888.png?uid=R151164025&ga=GA1.1.576781860.1727952383&semt=ais_hybrid",
    "https://cdn-icons-png.freepik.com/256/5588/5588198.png?uid=R151164025&ga=GA1.1.576781860.1727952383&semt=ais_hybrid",
    "https://cdn-icons-png.freepik.com/256/16321/16321864.png?uid=R151164025&ga=GA1.1.576781860.1727952383&semt=ais_hybrid"
  ]

  return (


    <div >
      <div className="container">


        <div className="row text-center mt-5 mb-5">
          <h2>Why Choose Us</h2>
          <h5>This is Why Choose Us</h5>
        </div>


        <div className="row ">
          <div className="cardinrow">
            <CardWhyUs img={ imgarr[0]} h3="Secure Exams" para="Online secure and reliable exams ensure fairness, prevent cheating, protect data, authenticate users, and provide accurate, tamper-proof ..." />
            <CardWhyUs img={ imgarr[1]} h3=" Multiple Questions"  para=" Multiple question formats include multiple-choice, true/false, fill-in-the-blank, matching, short answer, and essay for diverse ..."/>
            <CardWhyUs img={ imgarr[2]} h3=" Instant Results"  para=" Instant results and feedback enhance learning by providing quick insights, improving performance, boosting engagement, and enabling..."/>
            <CardWhyUs img={ imgarr[3]} h3=" Mobile-Friendly "  para=" Mobile-friendly and accessible design ensures seamless navigation, responsive layouts, easy interaction, inclusive features, and ..."/>
            <CardWhyUs img={ imgarr[4]} h3=" Flexible Scheduling "  para=" Flexible exam scheduling allows students to choose convenient times, reduces stress, accommodates diverse needs, and enhances ..."/>
            <CardWhyUs img={ imgarr[5]} h3=" User-Friendly "  para=" A user-friendly dashboard offers intuitive navigation, clear visuals, real-time updates, customization, responsiveness, and seamless ..."/>

          </div>

        </div>



      </div>
    </div>
  )
}

export default WhychhoseusHome
