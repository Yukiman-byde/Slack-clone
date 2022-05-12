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
         $this->attributes['room_hash'] = bcrypt($value);
     }
     
    //pick the appropriate channel 
     public function channel($name, $boolean){
         $boolean ? $channel = $this->channel_filter_id($name) :
                    $channel = $this->channel_filter($name);
        
        return $channel;
     }
     
    //fetch $hash and filter it inside Room database 
     private function channel_filter($name){
       $room_array = $this->get()->toArray();
       
      $result = array_filter($room_array, function($room){
            $array = $room['room_name'] == $name;
            return $array;
       });
      
     
       //array_values can reset the array keys to 0
       return array_values($result);
     }
     
     private function channel_filter_id($name){
         $result = $this->where('room_name', $name)->first()->id;
         
         return $result;
     }
     
     public function comments(){
         return $this->hasMany('App\Comment');
     }
}
