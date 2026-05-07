//your JS code here. If required.
function daysOfYear(params) {
	if( (params%4===0 and params%100!==0)|| params%400===0) return 366;
	return 365
}
