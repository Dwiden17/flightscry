package com.example.flightscry

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import com.skyscanner.backpack.text.BpkText

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val route = findViewById<BpkText>(R.id.flight_route)
        val time = findViewById<BpkText>(R.id.flight_time)

        // Dummy data
        route.text = "New York (JFK) → Tokyo (HND)"
        time.text = "Departure: 12:45 PM"
    }
}
