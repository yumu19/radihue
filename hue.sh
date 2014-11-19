IPADDR="192.168.0.6"
NUM="2"
HUE=$1
QUERY="{\"on\":true, \"sat\":255, \"bri\":255, \"hue\":${HUE}}"
echo ${QUERY}
curl -v -H "Content-type: application/json" -X PUT -d "${QUERY}" http://${IPADDR}/api/newdeveloper/lights/${NUM}/state
