package main

import (
	"context"

	sparta "github.com/mweagle/Sparta"
)

func weekTimeTable(ctx context.Context) (Week, error) {
	return GetWeekTime(), nil
}

func dayTimeTable(ctx context.Context) (Day, error) {
	return GetTodayTime(), nil
}

func main() {
	var lambdaFunctions []*sparta.LambdaAWSInfo
	weekTimeTableFn, _ := sparta.NewAWSLambda("Get current week timetable",
		weekTimeTable,
		sparta.IAMRoleDefinition{})
	dayTimeTableFn, _ := sparta.NewAWSLambda("Get current day timetable",
		dayTimeTable,
		sparta.IAMRoleDefinition{})
	lambdaFunctions = append(lambdaFunctions, weekTimeTableFn)
	lambdaFunctions = append(lambdaFunctions, dayTimeTableFn)
	sparta.Main("LuTimeTableStack",
		"Get Lu timetable!",
		lambdaFunctions,
		nil,
		nil)
}
