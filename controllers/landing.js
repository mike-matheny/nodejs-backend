//calls res.render to render the html page from a template
//first arg is name of template file
//second arg is js object with KV pair

//essestially this simply renders an html page



exports.get_landing = function(req,res,next) {
	res.render('landing', { title: 'Express'});
}

exports.submit_lead = function(req,res,next) {
	console.log("lead email:", req.body.lead_email);
	res.redirect('/');
}