from fastapi import FastAPI

from app.db.database import engine, Base
import app.models  # Important: ensures models are registered

from app.routers import users, device, alerts, dashboard, logs

from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="SentryNode Backend API",
    version="1.0.0"
)

Base.metadata.create_all(bind=engine)


app.include_router(
    users.router,
    prefix="/api/users",
    tags=["Users"]
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # later restrict this
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(
    device.router,
    prefix="/api/devices",
    tags=["Devices"]
)



app.include_router(
    alerts.protected_router,
    prefix="/api/alerts",
    tags=["Alerts"]
)

app.include_router(
    alerts.public_router,
    prefix="/api/alerts",
    tags=["Alerts"]
)


app.include_router(
    dashboard.router,
    prefix="/api/dashboard",
    tags=["Dashboard"]
)

app.include_router(
    logs.router,
    prefix="/api/logs",
    tags=["Logs"]
)