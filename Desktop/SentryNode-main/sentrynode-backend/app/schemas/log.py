from pydantic import BaseModel
from datetime import datetime
from typing import List, Optional

class TrafficLogResponse(BaseModel):
    id: int
    device_id: int
    source_ip: str
    destination_ip: str
    protocol: str
    packet_count: int
    byte_count: int
    timestamp: datetime

    class Config:
        from_attributes = True

class TrafficLogList(BaseModel):
    items: List[TrafficLogResponse]
    total: int
    limit: int
    offset: int
