
saturdays = []
for i in range(1, 365):
	if i % 7 == 0:
		saturdays.append(i + 1) 





jan = 1
feb = jan + 31
march = 32 + 28
April = march + 30
May = April + 31
June = May + 30
July = June + 31
August = July + 31
September = August + 30
October = September + 31
November = October + 30
December = November + 31


months = jan, feb, march, April, May, June, July, August, September, October, November, December





first = []
for i in saturdays: 
	if i in months:
		first.append(i)



weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]


days = []
for i in months:
	for j in weekdays:
		days.append(j + str(i))






