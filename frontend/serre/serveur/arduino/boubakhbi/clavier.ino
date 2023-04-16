#include <LiquidCrystal_I2C.h> 
#include <Keypad.h>
#include <Servo.h> 
const int ROW_NUM = 4; //four rows
const int COLUMN_NUM = 4; //four columns
LiquidCrystal_I2C lcd(0x27, 20, 4);
char keys[ROW_NUM][COLUMN_NUM] = {
{'1','2','3', 'A'},
{'4','5','6', 'B'},
{'7','8','9', 'C'},
{'*','0','#', 'D'}
};
String code;
byte pin_rows[ROW_NUM] = {9, 8, 7, 6}; //connect to the row pinouts of the keypad
byte pin_column[COLUMN_NUM] = {5, 4, 3, 2}; //connect to the column pinouts of the keypad
Keypad keypad = Keypad( makeKeymap(keys), pin_rows, pin_column, ROW_NUM, COLUMN_NUM );
 
int enA = 10;
int in1 = 13;
int in2 = 12;
int i=1;
Servo monServo;
 
void setup(){
 lcd.init(); // initialisation de l’afficheur
 lcd.clear();
 lcd.backlight(); // active le rétro-éclairage
 lcd.setCursor(0, 0); // se positionner à la première ligne
 monServo.attach(11);
 
 pinMode(enA, OUTPUT);
 pinMode(in1, OUTPUT);
 pinMode(in2, OUTPUT);
 analogWrite(enA, 65); 
 code.reserve(32);
 
}
 
void loop(){
  monServo.write(0); 
char key = keypad.getKey();
if(key) // On appuie sur une touche du clavier matriciel
{
lcd.print(key);  // Afficher le carctere saisie sur l'afficheur LCD
code+=key;
delay(100);
//lcd.clear();
}
if ((code.length()==3)){
 
  if (code=="157") { 
  lcd.clear();
  lcd.print("OUVERTURE");
  monServo.write(90); 
  delay(8000);
  monServo.write(0);
  lcd.print("FERMETURE"); 
  lcd.clear();
      //le moteur tourne pour ouvrir la porte
  //digitalWrite(in1, HIGH);
  //digitalWrite(in2, LOW);
  //delay(700);
  //stop le moteur
  //digitalWrite(in1, LOW);
  //digitalWrite(in2, LOW);
  //lcd.clear();
  code="";
  }
  while(code.length()==3 && code!="157"){
    i++;
    //lcd.setCursor(1,1);
    lcd.print(i);
    code="";
    lcd.clear();
    if(i > 3){
      digitalWrite(in1, HIGH);
      delay(2000);
      digitalWrite(in1, LOW);
    }
  }
  /*else if (code=="158"){
  //delay(16000);
  //digitalWrite(in1, LOW); //le moteur tourne dans le sens inverse pour fermer la porte
  digitalWrite(in2, HIGH);
  delay(7000);
  //stop le moteur
  //digitalWrite(in1, LOW);
  digitalWrite(in2, LOW);
  lcd.clear();
  code="";
  }
 
  else {
         lcd.print("code non valide");
         delay(2000);
         lcd.clear();
         code="";
  } */
}
}
