from datetime import datetime, date, time
import requests
import functools 

lat=[19.1136,19.2241,19.271729]
lon=[72.8697,72.8666,72.882933]

year=2018
mon=10
day=6
hour=12
minu=30
d = date(year, mon, day)
t = time(hour, minu)
n=len(lon)
buffer=90*60
total= 20000#6*60*60#val will chnage
finalList=[]
timeElapsed=datetime.combine(d, t).timestamp()
currLat=19.385430
currLon=72.828738
def feasiblePaths(i):
  if i==n:
    count=0
    countTime=0
    arr=[]

    for x in range(0,n-1):
        parameters = {"origins":str(lat[x])+","+str(lon[x]),"destinations":str(lat[x+1])+","+str(lon[x+1]),'departure_time':int(timeElapsed),'key':"AIzaSyDmk0ZLNenVOm3-bcdIHiMm2nBkSrdKLxw"}
        response = requests.get("https://maps.googleapis.com/maps/api/distancematrix/json", params=parameters)
        
        s=response.json()['rows'][0]['elements'][0]['duration_in_traffic']['value']
        t=int(s)
        
        
        countTime=countTime+s

        if(total<countTime):
            countTime=countTime-s
            break;

        countTime=countTime+buffer
        count=count+1
        arr.append({'lat':lat[x+1],'lon':lon[x+1]})
    arr.append(countTime)
    finalList.append(arr)


  else:
    for j in range(i,n):
      lat[i],lat[j]=lat[j],lat[i]
      lon[i],lon[j]=lon[j],lon[i]
      feasiblePaths(i+1)
      lat[i],lat[j]=lat[j],lat[i]
      lon[i],lon[j]=lon[j],lon[i]

def customFunc(a,b):
    if len(a)>len(b):
        return 1
    elif len(a)==len(b):
        if a[len(a)-1]>b[len(b)-1]:
            return -1
        else:
            return 1
    else:
        return -1
lat.insert(0,currLat)
lon.insert(0,currLon)
n=len(lon)
feasiblePaths(1)

cmp = functools.cmp_to_key(customFunc)
finalList.sort(key=cmp)
finalList.reverse()
print(finalList[0])
