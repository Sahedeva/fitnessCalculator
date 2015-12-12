// For men:

// BEE = 3.8 × age (years) + 456.4 × height (meters)

// + 10.12 × weight (kg)

// For women:

// BEE = 2.67 × age (years) + 401.5 × height (meters)

// + 8.6 × weight (kg)

// The next step is the automatic calculation of the impact

// of each reported physical activity on energy expenditure (

// ∆ PAL). This formula, set in the template, is as follows:

// ∆ PAL =

// (METs – 1) x [(1.15/0.9) × Duration (min-
// utes)]/1440)

// BEE/[0.0175 x 1440 × weight (kg)]
// BMR = 10 * weight(kg) + 6.25 * height(cm) - 5 * age(y) + 5         (man)
// BMR = 10 * weight(kg) + 6.25 * height(cm) - 5 * age(y) - 161     (woman)

$("#submit").on('click', function(){
var sex = $('.sex').val();
var age = $('#age').val();
var height = $('#height').val();
var weight = $('#weight').val();
var mets = $('#mets').val();
var duration = $('#duration').val();
if (sex === 'male') {
	var bee = (3.8 * age) + (456.4 * height) + (10.12 * weight);
	// var bee = ((10*weight)+(625*height)-(5*age))+5;
}
if (sex === 'female') {
	var bee = (2.67 * age) + (401.5 * height) + (8.6 * weight);
	// var bee = ((10*weight)+(625*height)-(5*age))-161;
}

var deltaPal = ((mets - 1) *(((1.15/0.9)*duration)/1440))/(bee/(0.0175*1440*weight));
$('#results').html('<h3>Basal Engergy Expenditure: '+bee.toFixed(3)+'</h3><h3>Delta Physical Activity Level: '+deltaPal+'</h3>');
return false;
});