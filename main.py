from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service

import time



def fill_form(url, file_path):

    # Initialize the WebDriver
    # driver = webdriver.Chrome()
    cService = webdriver.ChromeService(executable_path='chromedriver-mac-x64/chromedriver')
    driver = webdriver.Chrome(service = cService)

    # Load the webpage
    driver.get(url)
    driver.find_element(By.NAME,"your-name").send_keys('علیرضا شهبازیان')
    driver.find_element(By.NAME,"your-email").send_keys('alishahbazi0831@gmail.com')
    driver.find_element(By.NAME,"your-phone").send_keys('09392622300')
    driver.find_element(By.NAME,"your-position").send_keys('Front-end(Vue.js)')

    fileCV = driver.find_element(By.CSS_SELECTOR,".wpcf7-form-control-wrap > .wpcf7-file")
    fileCV.send_keys(file_to_upload)
    driver.find_element(By.NAME,"your-message").send_keys('I love irani-cart and i want work there')


    driver.find_element(By.CLASS_NAME,'btn-lg').click()

    time.sleep(5)

    driver.quit()

# URL of the form
form_url = 'https://www.iranicard.ir/jobs/'

# Path to the file you want to upload
file_to_upload = 'ARS.png'

# Loop to fill the form 100 times
for _ in range(30):
    fill_form(form_url, file_to_upload)