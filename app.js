// ab hm jaarh hn quiz app ki pract krne t sbse phle ksi bh quiz app mn kia hta h koi ques
// hta h phr 4 radio btns hte hn jske sth us ques k options hte hn or neeche ek btn hta h next
// ka t kia hga next ka btn t hr jgah esi rhegat oosee t hm index.html ki file mn hi bna 
// lnge lkn jo quest or options hnge wo hr pg pe change hnge t islye oose hmn app.js mn lkhna
// prega hn uska tag hm doc mn hi bnaenge taake whn se oose get kr skn.

// ab hm kia krnge question ans k lye arr of obj bnaenge yni ek array bne gi jsmn itne saare
// objs bne ge hr object mn ek question or uske 4 option hnge

// let quesAns = [
//    {
//     que1: 'what is the sum of 2 + 2',
//     ans1: '2',
//     ans2: '4',
//     ans3: '8',
//     ans4: '6'
//    },

//    {
//     que1: 'what is the sub of 2 - 2',
//     ans1: '2',
//     ans2: '0',
//     ans3: '8',
//     ans4: '6'
//    },

//    {
//     que1: 'what is the sum of 2 x 2',
//     ans1: '2',
//     ans2: '4',
//     ans3: '8',
//     ans4: '6'
//    },

//    {
//     que1: 'what is the sum of 2 / 2',
//     ans1: '2',
//     ans2: '4',
//     ans3: '8',
//     ans4: '1'
//    },

//    {
//     que1: 'what is the sum of 2 % 2',
//     ans1: '2',
//     ans2: '0',
//     ans3: '1',
//     ans4: '6'
//    }
// ]

// acha ab main kaam strt hwa h or wo ye h k doc pe jhn wo para jo ques k lye bnaya th wo
// khali h ab oose bh get krnge or jo 4 radios hn oose bh get krnge t phle t para ko get krte
// hn 



// let ques = document.getElementById('ques')
// let ans1 = document.getElementById('ans1')
// let ans2 = document.getElementById('ans2')
// let ans3 = document.getElementById('ans3')
// let ans4 = document.getElementById('ans4')

// ab hmne doc se cheezon ko utha k oose JS mn get t krlia h or var mn store bh krlia h ab
// usmn print krwaenge or wo hm kse krnge uske innerHTML ko uske equal krwa lnge

// ques.innerHTML = quesAns[index].que1
// ans1.innerHTML = quesAns[index].ans1
// ans2.innerHTML = quesAns[index].ans2
// ans3.innerHTML = quesAns[index].ans3
// ans4.innerHTML = quesAns[index].ans4 // ab mn kia krngi is pure kaam ko yhn se hta k
// direct function ko cl krlngi t kia hga first time pe bh incr hjaega wrna 1st time mn incr
// nh hta

// let index = 0

// function nextque() {
// if (index > quesAns.length -1) {
//     document.write('Questions are ended')
// }

// else {
//     ques.innerHTML = quesAns[index].que1
//     ans1.innerHTML = quesAns[index].ans1
//     ans2.innerHTML = quesAns[index].ans2
//     ans3.innerHTML = quesAns[index].ans3
//     ans4.innerHTML = quesAns[index].ans4
//     index++
// }
    
// }

// nextque()

// agr hmn kbhi function ko direct pg k load hne pe hi chlana ho t hm kia krnge hm direct hi
// function ko cl krlnge JS ki file mn is trhn.

// ab mn chah rh hn k jb ques end hjaen t console pe error na aaye blke kaam khtm hjae. t iske
// lye if else wla kaam hga function k undr