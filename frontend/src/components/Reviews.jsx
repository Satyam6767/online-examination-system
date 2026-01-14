import React from 'react'
import ReviewInner from './ReviewInner'

function Reviews() {
    return (
        <div>
            <div class="testimonialarea">
                <div class="container hell">
                    <div className="row text-center mt-5 mb-5">
                        <h2>Testimonial</h2>
                        <h5>Our Reviews</h5>
                    </div>

                    <div className="row">
                        <div className="  newani">


                        <ReviewInner para="SmartExam is an excellent platform with a seamless interface and smooth performance. The proctoring feature ensures fair exams, making it a great choice for students and institutions." name="Amit Sharma" role="Student" />

<ReviewInner para="A reliable online exam system with real-time monitoring and user-friendly features. SmartExam makes assessments hassle-free and secure, enhancing the online learning experience effectively." name="Priya Verma" role="Educator" />

<ReviewInner para="SmartExam offers a secure and efficient testing experience. The platform is easy to navigate, ensuring smooth exams for students and professionals. Highly recommended for institutions." name="Rahul Singh" role="Student" />

<ReviewInner para="The best online exam platform! It provides excellent proctoring and a smooth assessment process. SmartExam has made conducting and taking exams effortless and fair." name="Neha Patil" role="Exam Coordinator" />

<ReviewInner para="SmartExam is an innovative solution for online exams. The secure environment and real-time tracking make it trustworthy for students and teachers. A great step toward digital assessments!" name="Vikram Mehta" role="Professor" />


                        </div>
                    </div>





                </div>
            </div>

        </div>
    )
}

export default Reviews
