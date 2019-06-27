from sqlalchemy import create_engine, Column, Integer, String, DateTime, ForeignKey, Float, Text , Boolean
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, relationship
from datetime import datetime, timedelta
import json
import os

Base = declarative_base()

class ModelTest(Base):
    __tablename__ = 'ModelTest'
    id = Column(Integer, primary_key=True)

    def __init__(self, payload):
        pass


class CryptoChunk (Base):
    __tablename__ = "CryptoChunk"
    id = Column(Integer, primary_key=True)
    buy_price = Column(Float, nullable=False)
    sell_price = Column(Float, nullable=False)
    amount = Column(Float, nullable=False)
    cryptoblock_id = Column(ForeignKey('CryptoBlock.id'), nullable=False)
    date_sold = Column(DateTime, nullable=False)

    def __init__(self):
        self.buy_price = payload['buy_price']
        self.sell_price = payload['sell_price']
        self.date_sold = payload['date_sold']
        self.amount = payload['amount']
        self.cryptoblock_id = payload['cryptoblock_id']


class CryptoBlock (Base):
    __tablename__ = 'CryptoBlock'
    id = Column(Integer, primary_key=True)
    buy_price = Column(Float, nullable=False)
    total_amount = Column(Float, nullable=False)
    date_purchased = Column(DateTime, nullable=False)
    date_completed = Column(DateTime, nullable=True)


    def __init__(self, payload):
        self.buy_price = payload['buy_price']
        self.total_amount = payload['total_amount']
        self.date_purchased = payload['date_purchased'] 

class BinanceApiKey(Base):
    __tablename__ = 'BinanceApiKey'
    id =  Column(Integer, primary_key=True)

    label = Column(String(50), nullable=True)
    key = Column(String(200), nullable=False)
    secret = Column(String(200), nullable=False)
    
    read = Column(Boolean, nullable=False)
    write = Column(Boolean, nullable=False)
    withdraw = Column(Boolean, nullable=False)

    def __init__(self, payload):
        self.key = payload['api_key']
        self.secret = payload['api_secret']

        self.read = payload['read']
        self.write = payload['write']
        self.withdraw = payload['withdraw']

        if 'label' in payload.keys():
            self.label = payload['label']

class RCB (Base):
    __tablename__ = 'RCB'
    id = Column(Integer, primary_key=True)
    invested_amount = Column(Float, nullable=False)

    def __init__(self, payload):
        self.invested_amount = payload['invested_amount']


class RCB_tmp (Base):
    __tablename__ = 'RCB_tmp'
    id = Column(Integer, primary_key=True)
    reference_id = Column(Integer)
    invested_amount = Column(Float, nullable=False)


    def __init__(self, payload):
        self.invested_amount = payload['invested_amount']
        if 'reference_id' in payload.keys():
            self.reference_id = payload['reference_id']

