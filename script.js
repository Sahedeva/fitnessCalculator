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
var restHeart = $('#restHeart').val();
// var mets = $('#mets').val();
var durationFat = $('#durationFat').val();
var durationCardio = $('#durationFat').val();
var durationPeak = $('#durationFat').val();
var maxHeart = 220 - age;
var voMax = 15.3 * (maxHeart/restHeart); 
if (sex === 'male') {
	var bee = (3.8 * age) + (456.4 * height) + (10.12 * weight);
	var beeMin = bee/1440;
	// fat burn zone
	var heartRateFat = maxHeart * 0.6;
	var calMinFat = (-59.3954 + (-36.3781 + (0.271 * age) + (0.394 * weight) + (0.404 * voMax) + (0.634 * heartRateFat)))/4.184
	var metFat = calMinFat/beeMin
	var deltaPalFat = ((metFat - 1) *(((1.15/0.9)*durationFat)/1440))/(bee/(0.0175*1440*weight));
	// cardio zone
	var heartRateCardio = maxHeart * 0.84;
	var calMinCardio = (-59.3954 + (-36.3781 + (0.271 * age) + (0.394 * weight) + (0.404 * voMax) + (0.634 * heartRateCardio)))/4.184
	var metCardio = calMinCardio/beeMin
	var deltaPalCardio = ((metCardio - 1) *(((1.15/0.9)*durationCardio)/1440))/(bee/(0.0175*1440*weight));
	// peak zone
	var heartRatePeak = maxHeart * 0.96;
	var calMinPeak = (-59.3954 + (-36.3781 + (0.271 * age) + (0.394 * weight) + (0.404 * voMax) + (0.634 * heartRatePeak)))/4.184
	var metPeak = calMinPeak/beeMin
	var deltaPalPeak = ((metPeak - 1) *(((1.15/0.9)*durationPeak)/1440))/(bee/(0.0175*1440*weight));
	// var bee = ((10*weight)+(625*height)-(5*age))+5;
}
if (sex === 'female') {
	var bee = (2.67 * age) + (401.5 * height) + (8.6 * weight);
	// fat burn zone
	var heartRateFat = maxHeart * 0.6;
	var calMinFat = (-59.3954 + (0.274 * age) + (0.103 * weight) + (0.380 * voMax) + (0.450 * heartRateFat))/4.184
	var metFat = calMinFat/beeMin
	var deltaPalFat = ((metFat - 1) *(((1.15/0.9)*durationFat)/1440))/(bee/(0.0175*1440*weight));
	// cardio zone
	var heartRateCardio = maxHeart * 0.84;
	var calMinCardio = (-59.3954 + (0.274 * age) + (0.103 * weight) + (0.380 * voMax) + (0.450 * heartRateCardio))/4.184
	var metCardio = calMinCardio/beeMin
	var deltaPalCardio = ((metCardio - 1) *(((1.15/0.9)*durationCardio)/1440))/(bee/(0.0175*1440*weight));
	// peak zone
	var heartRatePeak = maxHeart * 0.96;
	var calMinPeak = (-59.3954 + (0.274 * age) + (0.103 * weight) + (0.380 * voMax) + (0.450 * heartRatePeak))/4.184
	var metPeak = calMinPeak/beeMin
	var deltaPalPeak = ((metPeak - 1) *(((1.15/0.9)*durationPeak)/1440))/(bee/(0.0175*1440*weight));
	// var bee = ((10*weight)+(625*height)-(5*age))-161;
}

// var deltaPal = ((mets - 1) *(((1.15/0.9)*duration)/1440))/(bee/(0.0175*1440*weight));
$('#results').html('<h3>Basal Engergy Expenditure: ' + bee.toFixed(3) + '</h3><h3>Resting Heart Rate: ' + restHeart + '</h3><h3>Maximum Heart Rate: ' + maxHeart + '</h3><h3>VO2 max estimated: ' + voMax + '</h3><h3>MET Level for Fat Burn Zone: ' + metFat + '</h3><h3>Delta Physical Activity Level Fat Burn Zone: ' + deltaPalFat + '</h3><h3>MET Level for Cardio Zone: ' + metCardio + '</h3><h3>Delta Physical Activity Level Cardio Zone: ' +deltaPalCardio + '</h3><h3>MET Level for Peak Zone: ' + metPeak + '</h3><h3>Delta Physical Activity Level Peak Zone: ' + deltaPalPeak + '</h3>');
return false;
});



/*
Men: C/min = (-59.3954 + (-36.3781 + 0.271 x age + 0.394 x weight + 0.404 x VO2max + 0.634 x HR))/4.184

Women: C/min = (-59.3954 + (0.274 x age + 0.103 x weight + 0.380 x VO2max + 0.450 x HR)) / 4.184

Divide your BMR rate C/min into the C/min for activity x to determine your MET level.

VO2max = 15.3 x (MHR/RHR) 
MHR = max heart rate (220 - age)
RHR = resting heart rate
*/