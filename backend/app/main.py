# from fastapi import FastAPI
# from fastapi import FastAPI
# from app.db.mongo import db


# app = FastAPI(title="Secure Journal API")

# @app.get("/")
# def root():
#     return {"message": "Backend is running"}

# @app.get("/health")
# def health():
#     return {"status": "ok"}


# app = FastAPI()

# @app.get("/test-db")
# async def test_db():
#     collections = await db.list_collection_names()
#     return {"collections": collections}


from fastapi import FastAPI
from app.db.mongo import db

app = FastAPI()

@app.get("/test-db")
async def test_db():
    collections = await db.list_collection_names()
    return {"collections": collections}