package freecrmsprint;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

import pageObjects.AccountHomePage;

import pageObjects.Homepage;
import pageObjects.Login;

public class crmlogin {
WebDriver driver;
Homepage hp;
Login lp;
AccountHomePage ap;
@BeforeMethod
public void before() throws InterruptedException
{
	System.setProperty("webdriver.chrome.driver", "C:\\Users\\Hi\\eclipse-workspace\\FreeCRM\\drivers\\chromedriver.exe");
driver=new ChromeDriver();
driver.manage().window().maximize();
driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
hp=new Homepage(driver);
lp=new Login(driver);
ap=new AccountHomePage(driver);
}
@AfterMethod
public void driverClose() {
driver.quit();
}
@Test(dataProvider="user")
public void loginSuccess(String email,String pass) throws InterruptedException
{
driver.get("https://freecrm.co.in/index.html");
hp.getLoginbtn();
lp.getEmail().sendKeys(email);
lp.getPassword().sendKeys(pass);
lp.getlogin().click();
}

@DataProvider(name="user")
public String[][] data() throws IOException
{
String[][] arrobj=getDataFormXLSX("testdata.xlsx");
return arrobj;
}
public String[][] getDataFormXLSX(String filename) throws IOException {
// TODO Auto-generated method stub
String[][] array=null;
FileInputStream fs=new FileInputStream(filename);
XSSFWorkbook wb =new XSSFWorkbook(fs);
XSSFSheet sh=wb.getSheetAt(0);
XSSFRow rows;
XSSFCell cell;
int rowCount=sh.getLastRowNum();
int columnCount=sh.getRow(0).getLastCellNum();

array=new String[rowCount][columnCount];
for(int i=1;i<rowCount+1;i++)
{
for(int j=0;j<columnCount;j++)
{
rows=sh.getRow(i);
cell=rows.getCell(j);
array[i-1][j]=cell.getStringCellValue();

}
}
return array;
}
}

