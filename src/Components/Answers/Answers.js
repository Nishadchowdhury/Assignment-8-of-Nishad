import React from 'react';
import './Answers.css'
const Answers = () => {
    return (
        <div className="answerContainer">
            <div className="ans1">
                <strong>how react work ?</strong> <br />
        ১, react js এর মধ্যে সব কিছুই component এর দ্বারা করতে হয় । components  একাধিক বার ব্যেবহার যোগ্য । <br />
        ২, react componenet কে reander করে webPage এ দেখায় । <br />
        ৩, react একটা vartual dom create করে তারপর কোন componenent এর কোন কিছু পরিবর্তন করলে সে সেটা react vartual dom এর সাথে তুলনা করে দেখে যে কোথায় কি পরিবর্তন হয়েছে <br />

        ৪,  তারপর react সেখানে new data আপডেট করে দেয় । <br />
        ৫, react Specifically যে part এ পরিবর্তন লক্ষ করে পায় শুদু মাত্র সে part কেই update করে , বাকি সব reload হয়না তাই webPage টা single page application এর মত কাজ করে । 
            </div>
        <br /><br />
            <div className='ans2'>
        <strong>How useState works ?</strong> <br />
        ১, useState হল react এর একটা hook <br />
        2, এটার সাহায্যে একটা state variable এর সাহায্যে কোন variable এর মান পরিবর্তন করতে পারে । <br />
        ৩, আগে class component অনেক বেশি ব্যেবহার করা হতো কারন সেখানে state control এর সুজক ছিল কিন্তু functional components এ সে সুজক ছিলনা কিন্তু এখন functional components এ useState hooka এর সাহায্যে state control করা  সম্ভব । <br />
        ৪, useState কে একটা variable এর মত করে লিখতে হয় । একটা third braket এর মধ্যে একটা variable name নিতে হয় তার সাথে একটা function নিতে হয় যার সাহায্যে state এর নাম update করা হবে । এবং সেখানে সমান চিহ্ন দিয়ে তারপরে useState দিয়ে hook টাকে completely declare করতে হয়  <br />
        ৫,এবং শেষে এটাকে import করতে হয় react থেকে ।  

            </div>
        </div>
    );
};

export default Answers;