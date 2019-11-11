const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// Find a service page: check if the user leaves search field blank. If they do, display error. Otherwise redirect to search-results.
router.post('/find-a-service-answer', function (req, res) {
// Make a variable and give it the value from 'service-search'
var serviceSearch = req.session.data['service-search']
if (serviceSearch == "000"){
  // Send user to 'no-results'
  res.redirect('/no-results')
}
else {
  // Send user to 'search-results'
  res.redirect('/search-results')
}
})


// What kind of experience do you want to tell us about page: if they select 'Good experience', redirect to give-your-feedback. Otherwise redirect to when-it-happened.
router.post('/what-do-you-want-to-tell-us-about-answer', function (req, res) {
// Make a variable and give it the value from 'what-do-you-want-to-tell-us-about'
var experienceType = req.session.data['what-do-you-want-to-tell']
// Check whether the variable matches a condition
if (experienceType == "Good experience"){
  // Send user to 'give-your-feedback'
  res.redirect('/give-your-feedback')
}
else {
  // Send user to 'when-it-happened'
  res.redirect('/when-it-happened')
}
})

// When did it happen page: check if the user leaves radios unselected. If they do, display error. Otherwise redirect to abuse-or-neglect.
router.post('/when-it-happened-answer', function (req, res) {
// Make a variable and give it the value from 'when-did-it-happen'
var whenHappened = req.session.data['when-did-it-happen']
// Check whether the variable matches a condition
if (whenHappened == "Over a year ago"){
  // Send user to 'give-your-feedback'
  res.redirect('/give-your-feedback')
}
else {
  // Send user to 'abuse-or-neglect'
  res.redirect('/abuse-or-neglect')
}
})

// Is someone at risk of immediate harm page: check if the user leaves radios unselected. If they do, display error. If they select Yes, redirect to have-you-told-the-police-or-council. Otherwise redirect to give-your-feedback.
router.post('/is-someone-at-risk-answer', function (req, res) {
// Make a variable and give it the value from 'is-someone-at-risk'
var atRisk = req.session.data['risk-of-harm']
// Check whether the variable matches a condition
if (atRisk == "Yes, someone's at risk of abuse or neglect"){
  // Send user to 'have-you-told-the-police-or-council'
  res.redirect('/have-you-told-the-police-or-council')
}
else {
  // Send user to 'give-your-feedback'
  res.redirect('/give-your-feedback')
}
})

// Have you told the police or local council about this page: check if the user leaves radios unselected. If they do, display error. If they select Both, redirect to give-your-feedback. Otherwise redirect to we-may-have-to-tell-them.
router.post('/told-police-council-answer', function (req, res) {
// Make a variable and give it the value from 'told-police-council-answer'
var toldAuthorities = req.session.data['who-have-you-told']
// Check whether the variable matches a condition
if (toldAuthorities == "Neither of these"){
  // Send user to 'we-may-have-to-tell-them'
  res.redirect('/we-may-have-to-tell-them')
}
else {
  // Send user to 'give-your-feedbackl'
  res.redirect('/give-your-feedback')
}
})

// Give us your feedback page: if user previously selected 'Good experience', redirect to can-we-share. Otherwise redirect to have-you-worked-there.
router.post('/give-your-feedback-answer', function (req, res) {
  // Make a variable and give it the value
var experienceType = req.session.data['what-do-you-want-to-tell']
var yourFeedback = req.session.data['give-your-feedback']
  // Check whether experienceType variable matches a condition
if (experienceType == "Good experience"){
  // Send user to 'can-we-share'
  res.redirect('/can-we-share')
}
else {
  // Send user to 'have-you-worked-there'
  res.redirect('/have-you-told-the-service')
}
})

// What date it happened page: if user is feeding back on an online/phone service, redirect to have-you-told-the-service. Otherwise redirect to where-it-happened.
router.post('/what-date-it-happened-answer', function (req, res) {
// Make a variable and give it the value from 'service-type'
var serviceType = req.session.data['service-type']
// Check whether the variable matches a condition
if (serviceType == "remote"){
  // Send user to 'have-you-told-the-service'
  res.redirect('/have-you-told-the-service')
}
else {
  // Send user to 'where-it-happened'
  res.redirect('/where-it-happened')
}
})

// Have you worked for the service page: if user selects yes, redirect to check-if-the-law-will-protect-you. Otherwise redirect to can-we-share.
router.post('/have-you-worked-there-answer', function (req, res) {
// Make a variable and give it the value from 'have-you-worked-there'
var workedThere = req.session.data['have-you-worked-there']
// Check whether the variable matches a condition
if (workedThere == "Yes"){
  // Send user to 'check-if-the-law-will-protect-you'
  res.redirect('/check-if-the-law-will-protect-you')
}
else {
  // Send user to 'can-we-share'
  res.redirect('/can-we-share')
}
})

// Can we contact you page: if the user selects yes, redirect to your-contact-details. Otherwise redirect to did-you-hear-about-this-form-from-a-charity.
router.post('/can-we-contact-you-answer', function (req, res) {
// Make a variable and give it the value from 'can-we-contact-you'
var contactYou = req.session.data['can-we-contact-you']
// Check whether the variable matches a condition
if (contactYou == "Yes, I am happy for you to contact me"){
  // Send user to 'your-contact-details'
  res.redirect('/your-contact-details')
}
else if (contactYou == "Yes, you can contact me"){
  // Send user to 'your-contact-details'
  res.redirect('/your-contact-details')
}
else {
  // Send user to 'did-you-hear-about-this-form-from-a-charity'
  res.redirect('/did-you-hear-about-this-form-from-a-charity')
}
})

// How did you find out about this form page: if user selects 'A charity told me about it', redirect to tell-us-which-charity. Otherwise redirect to check-your-answers.
router.post('/did-you-hear-about-this-form-from-a-charity-answer', function (req, res) {
// Make a variable and give it the value from 'did-you-hear-about-this-form-from-a-charity'
var foundForm = req.session.data['heard-from-a-charity']
if (foundForm == "Yes"){
  // Send user to 'tell-us-which-charity'
  res.redirect('/tell-us-which-charity')
}
else {
  // Send user to 'check-your-answers'
  req.session.data['check-answers'] = "true";
  res.redirect('/check-your-answers')
}
})

// Which charity told you page: check if the user leaves radios unselected. If they do, display error. Otherwise redirect to check-your-answers.
router.post('/which-charity-told-you-answer', function (req, res) {
// Make a variable and give it the value from 'which-charity'
var whichCharity = req.session.data['which-charity']
// Make a variable and give it the value from 'another-charity-name'
var anotherCharity = req.session.data['another-charity-name']
// Check whether the variable matches a condition (null)
if (whichCharity == "another charity" && anotherCharity == ""){
  // Make a variable if the user chooses 'another charity' but doesn't give its name
  req.session.data['another-charity-no-name'] = "You didn't tell us their name";
  // Send user to 'tell-us-which-charity'
  req.session.data['check-answers'] = "true";
  res.redirect('/check-your-answers')
}
else {
  // clear another-charity-no-name in case user is returning to the page
  req.session.data['another-charity-no-name'] = "";
  // Send user to 'check-your-answers'
  req.session.data['check-answers'] = "true";
  res.redirect('/check-your-answers')
}
})

// Report a problem page: check if the user leaves main text area blank. If they do, display error. Otherwise redirect to report-a-problem-sent.
router.post('/report-a-problem-answer', function (req, res) {
// Make a variable and give it the value from 'report-a-problem'
var reportProblem = req.session.data['with-hint']
// Check whether the variable matches a condition (null)
if (reportProblem == ""){
  // redirect back to same page to display error
  req.session.data['error-reportproblem'] = "error-reportproblem-empty";
  res.redirect('report-a-problem')
}
else {
  // clear error in case user is returning to the page
  req.session.data['error-reportproblem'] = "error-reportproblem-noerror";
  // Send user to 'report-a-problem-sent'
  res.redirect('/report-a-problem-sent')
}
})

module.exports = router
