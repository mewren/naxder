//
//  GameViewController.swift
//  Swiftris
//
//  Created by Jennifer Nolan on 2015-04-18.
//  Copyright (c) 2015 __MyCompanyName__. All rights reserved.
//https://www.bloc.io/tutorials/swiftris-build-your-first-ios-game-with-swift#!/chapters/682

import UIKit
import SpriteKit



class GameViewController: UIViewController {

    var scene: GameScene!
      var swiftris:Swiftris!
    override func viewDidLoad() {
        super.viewDidLoad()
        
        //configure the view
        let skView = view as SKView
        skView.multipleTouchEnabled = false
        
        //create and configure the scene
        scene = GameScene(size: skView.bounds.size)
        scene.scaleMode = .AspectFill
        // #1
        scene.tick = didTick
        
        swiftris = Swiftris()
        swiftris.beginGame()
        //present the scene
        skView.presentScene(scene)
        // #1
        scene.tick = didTick
        
        swiftris = Swiftris()
        swiftris.beginGame()

    }

    override func prefersStatusBarHidden() -> Bool {
        return true
    }
    // #3
    func didTick() {
        swiftris.fallingShape?.lowerShapeByOneRow()
        scene.redrawShape(swiftris.fallingShape!, completion: {})
    }
}
