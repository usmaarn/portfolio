import os
import time
from uuid import uuid4
from datetime import datetime

while True:
    print('adding changes to commit....')
    os.system('git add .')

    message = f'{datetime.now()} - {uuid4()}'
    os.system(f'git commit -m "{message}"')

    os.system('git push')
    print(f"{message} pushed.")

    time.sleep(60 * 10)