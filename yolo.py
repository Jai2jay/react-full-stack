import pandas as pd
import numpy as np 

data = {'name':['sal',None,'mol','seb'],
        'age':[None,20,20,21],
        'score':[85,77,80,None]}

df=pd.DataFrame(data)

# print(df.isnull())
# print(df.isnull().sum)
# df_drop=df.dropna()
# print(df_drop)
fill=df.fillna(0)
df['age']=df['age'].fillna(df['age'].mean())
print(df)
# data = {'product': ['lap','phone','cam','desk'],
#         'price': [1000,9000,6000,7000]}

# df = pd.DataFrame(data,index=['A','B','C','D'])
# print(df)

# print(df.iloc[2:4])
# print(df.loc['A':'c'])


# data = {'mark':[20,30,50,77,80],
#         'student':['a','b','c','d','e']}

# df = pd.DataFrame(data,index=['A','B','C','D','E'])
# print(df)

# print(df[df['mark']>70])
# print(df[df['student']<'c'])


