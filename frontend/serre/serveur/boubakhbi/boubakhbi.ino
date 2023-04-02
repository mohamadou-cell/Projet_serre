#include <SPI.h> // SPI
#include <MFRC522.h> // RFID
#include "DHT.h"
#include <IRremote.h>
#define DHTPIN 2
#define ventilateurPIN 13 // broche -> pour ventilateur
#define buzzerPIN 5 // broche -> pour buzzer
#define luminosite A0
#define DHTTYPE DHT11

#define SS_PIN 10
#define RST_PIN 9
    
// Déclaration 
MFRC522 rfid(SS_PIN, RST_PIN); 

// Tableau contentent l'ID
byte nuidPICC[4];
DHT dht(DHTPIN, DHTTYPE);
int avoid;

void setup() 
{ 
  // Init RS232
  Serial.begin(9600);

  dht.begin();

  // Init SPI bus
  SPI.begin(); 

  // Init MFRC522 
  rfid.PCD_Init(); 

  pinMode(luminosite, INPUT);
  pinMode(ventilateurPIN,OUTPUT);
  pinMode(buzzerPIN,OUTPUT);
}
 
void loop() 
{
  avoid = digitalRead(luminosite);   // lecture de la valeur du signal
  int t = dht.readTemperature();
  int h = dht.readHumidity();
  Serial.print(t);
  Serial.print("/");
  Serial.print(h);
  Serial.print("/");
  Serial.println(avoid);

  unsigned char inChar = (unsigned char)Serial.read();
  if(inChar == '0'){
    digitalWrite(ventilateurPIN, LOW);
  }
  else if(inChar == '1'){
    digitalWrite(ventilateurPIN, HIGH);
  }
  
  
  // Initialisé la boucle si aucun badge n'est présent 
  if ( !rfid.PICC_IsNewCardPresent())
    return;
    Serial.print("@");

  // Vérifier la présence d'un nouveau badge 
  if ( !rfid.PICC_ReadCardSerial())
    return;

  // Enregistrer l'ID du badge (4 octets) 
  for (byte i = 0; i < 4; i++) 
  {
    nuidPICC[i] = rfid.uid.uidByte[i];
  }
  

  for (byte i = 0; i < 4; i++) 
  {
    Serial.print(nuidPICC[i], HEX);
  }
  Serial.println();

  // Re-Init RFID
  rfid.PICC_HaltA(); // Halt PICC
  rfid.PCD_StopCrypto1(); // Stop encryption on PCD
}
