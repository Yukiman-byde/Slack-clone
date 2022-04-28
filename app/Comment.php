<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    protected $fillable = [
        'user', 'content', 'room_id', 'user_image',
        ];
        
    public function user(){
        return $this->belongsTo('App\User');
    }
    
    public function room(){
        return $this->belongsTo('App\Room');
    }
        
}
