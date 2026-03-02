from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.db.database import get_db
from app.schemas.log import TrafficLogList
from app.services import log_service
from app.core.security import get_current_user

router = APIRouter()

@router.get("/", response_model=TrafficLogList)
def get_logs(
    limit: int = 100,
    offset: int = 0,
    db: Session = Depends(get_db),
    current_user = Depends(get_current_user)
):
    return log_service.get_traffic_logs(db, limit, offset)
