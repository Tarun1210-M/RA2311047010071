import heapq
from datetime import datetime
from urllib import request 
API_URL="https://20.207.122.201/evaluation-service/notifications"
WEIGHTS={
    "placement":3,
    "result":2,
    "event":1
}
class Notification:
    def __init__(self, id, type, message, timestamp):
        self.id=id
        self.type=type
        self.message=message
        self.timestamp=timestamp
    def priority_score(self):
        weight= WEIGHTS.get(self.type, 0)
        time_score= (self.timestamp.timestamp())
        return weight * 1000000000 + time_score 
    def __it__(self,other):
        return self.priority_score() < other.priority_score()
    def __repr__(self):
        return f"{self.id} | {self.type} | {self.message} | {self.timestamp}"
    
def fetch_notifications():
    response=request.get(API_URL)
    data=response.json()
    notifications=[]
    for item in data:
        notif=Notification(
            id=item["id"],
            type=item["type"],
            message=item["message"],
            timestamp=datetime.fromisoformat(item["timestamp"])
        )
    notifications.append (notif) 
    return notifications
def get_top_notifications(notifications, top_n=10):
    min_heap=[]
    for notif in notifications:
        if len(min_heap) < top_n:
            heapq.heappush(min_heap,notif)
        else:
            if notif.priority_score() > min_heap[0].priority_score():
                heapq.heappop(min_heap)
                heapq.heappush(min_heap,notif)
    return sorted(min_heap,key = lambda x: x.priority_score(),reverse=True)   
notification=fetch_notifications()     
top_notification = get_top_notifications(notification)
print("n\Top 10 priority notification:\n")
for notif in top_notification:
    print(notif)     






