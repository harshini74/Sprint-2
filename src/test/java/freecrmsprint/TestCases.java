package freecrmsprint;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

import pageObjects.AccountHomePage;
import pageObjects.Homepage;
import pageObjects.Login;

public class TestCases {
	WebDriver driver;
	Homepage hp;
	Login lp;
	AccountHomePage ap;
	    @BeforeMethod
	    public void setUp() throws InterruptedException
	    {
	    	System.setProperty("webdriver.chrome.driver", "C:\\Users\\Hi\\eclipse-workspace\\FreeCRM\\drivers\\chromedriver.exe");
	        driver=new ChromeDriver();
	        driver.get("https://freecrm.co.in/index.html");
	        driver.manage().window().maximize();
	        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
	        Thread.sleep(1500);
	        hp=new Homepage(driver);
	        lp=new Login(driver);
	        ap=new AccountHomePage(driver);
	        hp.getLoginbtn().click();
	       
	    }
	    @Test(priority=0)
	    public void loginfail() throws InterruptedException
	    {
	    lp.getEmail().sendKeys("");
	    Thread.sleep(1500);
	        lp.getPassword().sendKeys("");
	        lp.getlogin().click();
	        Thread.sleep(1500);
	   
	    }
	    @Test(priority=1)
	    public void loginfail2() throws InterruptedException
	    {
	       
	       lp.getEmail().sendKeys("example.123@gmail.com");
	        lp.getPassword().sendKeys("abcdefgh");
	        lp.getlogin().click();
	        Thread.sleep(1500);
	    }
	    @Test(priority=2)
	    public void loginSuccess() throws InterruptedException
	    {
	     
	    lp.getEmail().sendKeys("harshini.ghanta@gmail.com");
	        lp.getPassword().sendKeys("harshini4");
	        lp.getlogin().click();
	        Thread.sleep(1500);
	   
	    }
	    @Test(priority=2)
	    public void addContactfail() throws InterruptedException
	    {
	     
	    lp.getEmail().sendKeys("harshini.ghanta@gmail.com");
	        lp.getPassword().sendKeys("harshini4");
	        lp.getlogin().click();
	       // driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
	       // driver.navigate().refresh();
	        Thread.sleep(1500);
	        ap.getConclk().click();
	        driver.navigate().refresh();
	        Thread.sleep(1500);
	        ap.getConnewbtn().click();
	        Thread.sleep(1500);
	        driver.navigate().refresh();
	        ap.getFirstname().sendKeys("");
	        Thread.sleep(1500);
	       ap.getLastname().sendKeys("");
	        Thread.sleep(1500);
	       ap.getSavbtn().click();

	    }
	   
	    @Test(priority=2)
	    public void addContactsuccess() throws InterruptedException
	    {
	    lp.getEmail().sendKeys("harshini.ghanta@gmail.com");
	        lp.getPassword().sendKeys("harshini4");
	        lp.getlogin().click();
	     //   driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
	       // driver.navigate().refresh();
	        Thread.sleep(1500);
	       
	        ap.getConclk().click();
	      //  driver.navigate().refresh();
	        Thread.sleep(1500);
	        ap.getConnewbtn().click();
	        Thread.sleep(1500);
	        driver.navigate().refresh();
	        ap.getFirstname().sendKeys("harshini");
	        Thread.sleep(1500);
	       ap.getLastname().sendKeys("Ghanta");
	        Thread.sleep(1500);
	       ap.getSavbtn().click();

	    }
	    @Test(priority=2)
	    public void addDealfail() throws InterruptedException
	    {
	    lp.getEmail().sendKeys("harshini.ghanta@gmail.com");
	        lp.getPassword().sendKeys("harshini4");
	        lp.getlogin().click();
	        Thread.sleep(1500);
	       ap.getDealclk().click();
	       //driver.navigate().refresh();
	        ap.getDealnwbtn().click();
	        Thread.sleep(1500);
	       ap.getDealttl().sendKeys("");
	        ap.getSavbtn().click();
	        Thread.sleep(1500);
	 
	    }
	 
	    @Test(priority=2)
	    public void addDealsuccess() throws InterruptedException
	    {
	    lp.getEmail().sendKeys("harshini.ghanta@gmail.com");
	        lp.getPassword().sendKeys("harshini4");
	        lp.getlogin().click();
	        Thread.sleep(1500);
	       ap.getDealclk().click();
	     // driver.navigate().refresh();
	        ap.getDealnwbtn().click();
	        driver.navigate().refresh();
	        Thread.sleep(1500);
	       ap.getDealttl().sendKeys("Firstcontract");
	        ap.getSavbtn().click();
	        Thread.sleep(1500);
	   
	    }
	    @Test(priority=2)
	    public void addTaskfail() throws InterruptedException
	    {
	       
	    lp.getEmail().sendKeys("harshini.ghanta@gmail.com");
	        lp.getPassword().sendKeys("harshini4");
	        lp.getlogin().click();
	        //Thread.sleep(1500);
	        ap.getTaskclk().click();
	        Thread.sleep(1500);
	        //driver.navigate().refresh();
	        ap.getTasknwbtn().click();
	       // driver.navigate().refresh();
	        Thread.sleep(1500);
	       ap.getTaskttl().sendKeys("");
	       ap.getSavbtn().click();
	        Thread.sleep(1500);
	       
	   
	    }
	   
	    @Test(priority=2)
	    public void addTasksuccess() throws InterruptedException
	    {
	        lp.getEmail().sendKeys("harshini.ghanta@gmail.com");
	    lp.getPassword().sendKeys("harshini4");
	    lp.getlogin().click();
	    Thread.sleep(1500);
	    ap.getTaskclk().click();
	    driver.navigate().refresh();
	    ap.getTasknwbtn().click();
	    //driver.navigate().refresh();
	    Thread.sleep(1500);
	   ap.getTaskttl().sendKeys("Project");
	   ap.getDuedate().sendKeys("31/1/2021 18:00");
	   ap.getSavbtn().click();
	    Thread.sleep(1500);
	    }

	    @Test(priority=3)
	    public void viewCal() throws InterruptedException
	    {
	       
	    lp.getEmail().sendKeys("harshini.ghanta@gmail.com");
	    Thread.sleep(1500);
	        lp.getPassword().sendKeys("harshini4");
	        lp.getlogin().click();
	        Thread.sleep(1500);
	        ap.getCal().click();
	        Thread.sleep(1500);

	    }

	    @AfterMethod
	    public void tearDown()
	    {
	    driver.close();
	    }
	}


