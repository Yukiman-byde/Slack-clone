<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Hash;

class Room extends Model
{
    
    protected $fillable = [
        'room_hash', 'room_name'
     ];
     
     //set room_hash as Hash password
     public function setRoomHashAttribute($value){
         $this->attributes['room_hash'] = Hash::make($value);
     }
     
    //pick the appropriate channel 
     public function channel(string $hash){

        $channel = $this->channel_filter($hash);
        
        return $channel;
     }
     
    //fetch $hash and filter it inside Room database 
     private function channel_filter($hash){
       $room_array = $this->get()->toArray();
       
      $result = array_filter($room_array, function($room)use($hash){
           
            $array = $room['room_hash'] == $hash;
            return $array;
       });
      
     
       //array_values can reset the array keys to 0
       return array_values($result);
     }
}
