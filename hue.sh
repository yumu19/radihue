IPADDR="192.168.0.6"
NUM=$1
SAT=$2
BRI=$3
HUE=$4
i=0
QUERY="{\"on\":true, \"sat\":${SAT}, \"bri\":${BRI}, \"hue\":${HUE}}"
echo ${QUERY}
while [ $i -lt 3 ]
do 
	curl -v -H "Content-type: application/json" -X PUT -d "${QUERY}" http://${IPADDR}/api/newdeveloper/lights/${NUM}/state
	sleep 1s
	i=`expr $i + 1`
done
QUERY="{\"on\":true, \"sat\":0, \"bri\":0, \"hue\":${HUE}}"
curl -v -H "Content-type: application/json" -X PUT -d "${QUERY}" http://${IPADDR}/api/newdeveloper/lights/${NUM}/state
