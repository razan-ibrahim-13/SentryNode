from sqlalchemy.orm import Session
from app.models.logs import TrafficLog

def get_traffic_logs(db: Session, limit: int = 100, offset: int = 0):
    query = db.query(TrafficLog).order_by(TrafficLog.timestamp.desc())
    total = query.count()
    items = query.limit(limit).offset(offset).all()
    
    return {
        "items": items,
        "total": total,
        "limit": limit,
        "offset": offset
    }
